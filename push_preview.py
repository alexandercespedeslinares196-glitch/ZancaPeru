#!/usr/bin/env python3
"""Push the local Zanca website changes to a preview branch via the GitHub
Git Data API (SSH is blocked from this machine, so git push cannot be used).

Uses the stored custom.github credential through the surrogate exchange;
the real token never appears here, in arguments, or in logs.

Flow: read changed files from `git status`, create blobs, build a new tree
on top of main's tree, create one commit, point the preview branch at it.
"""
import base64
import json
import os
import subprocess
import sys
import urllib.error
import urllib.request

sys.path.insert(0, "/opt/muse/skills/custom-connector-setup/bin")
from dynamic_credentials import add_surrogate_to_request, read_response_body

API_BASE = "https://api.github.com"
REPO = "alexandercespedeslinares196-glitch/ZancaPeru"
BRANCH = "mejoras-web-20-nov"
WORKDIR = os.path.expanduser("~/workspace/zanca-web")
AUTHOR = {"name": "Fiorella Chávarry", "email": "fchavarrya@gmail.com"}
MESSAGE = """Mejoras web Zanca: perfumado de regalo, garantia de desinfeccion, fotos reales y enlaces

- Perfumado como regalo incluido (ya no extra opcional) en servicios, metodo, cotizador y pie
- Transparencia: manchas 50%-90% nunca 100%, desinfeccion garantizada al 100%
- Antes/despues con fotos reales de trabajos (muebles y colchon) y foto propia para sillas
- Fotos en las 6 tarjetas de servicios; hero mas visible (velo mas ligero)
- Pago con Yape al 937 712 772, nueva FAQ de pago, tiempos completos en FAQ
- Redes sociales (Facebook, Instagram) y enlace al catalogo en el pie
- Cabecera: menu completo solo en pantallas grandes, telefono sin partirse
- Widget de WhatsApp: ya no se abre solo ni muestra aviso falso
- Correcciones de texto: camionetas y SUV, cuidado responsable"""


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args):
        raise RuntimeError("redirect refused, verify the endpoint")


def api(method, path, payload=None):
    body = json.dumps(payload).encode("utf-8") if payload is not None else None
    req = urllib.request.Request(API_BASE + path, data=body, method=method)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("X-GitHub-Api-Version", "2022-11-28")
    if body is not None:
        req.add_header("Content-Type", "application/json")
    add_surrogate_to_request(req, "custom.github", allowed_hosts=["api.github.com"])
    try:
        with urllib.request.build_opener(NoRedirect()).open(req, timeout=120) as resp:
            return json.loads(read_response_body(resp) or b"{}")
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "replace")
        raise RuntimeError(f"{method} {path} -> HTTP {exc.code}: {detail}") from exc


def changed_files():
    out = subprocess.run(["git", "status", "--porcelain", "-uall"], cwd=WORKDIR,
                         capture_output=True, text=True, check=True).stdout
    files = []
    for line in out.splitlines():
        status, path = line[:2], line[3:]
        if path.startswith('"') and path.endswith('"'):
            path = json.loads(path)
        files.append((status.strip(), path))
    return files


def main():
    # Base: current main commit and tree.
    main_ref = api("GET", f"/repos/{REPO}/git/ref/heads/main")
    base_sha = main_ref["object"]["sha"]
    base_commit = api("GET", f"/repos/{REPO}/git/commits/{base_sha}")
    base_tree = base_commit["tree"]["sha"]
    print(f"base main: {base_sha[:7]} tree {base_tree[:7]}")

    # Create the preview branch at main (or reuse it if it exists).
    try:
        api("POST", f"/repos/{REPO}/git/refs",
            {"ref": f"refs/heads/{BRANCH}", "sha": base_sha})
        print(f"branch {BRANCH} created at {base_sha[:7]}")
    except RuntimeError as exc:
        if "Reference already exists" in str(exc):
            print(f"branch {BRANCH} already exists; will move it")
        else:
            raise

    # Blobs + tree entries for every changed file.
    entries = []
    for status, path in changed_files():
        if status == "D":
            entries.append({"path": path, "mode": "100644",
                            "type": "blob", "sha": None})
            print(f"delete {path}")
            continue
        full = os.path.join(WORKDIR, path)
        with open(full, "rb") as fh:
            raw = fh.read()
        if path.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".gif")):
            payload = {"content": base64.b64encode(raw).decode("ascii"),
                       "encoding": "base64"}
        else:
            payload = {"content": raw.decode("utf-8"), "encoding": "utf-8"}
        blob = api("POST", f"/repos/{REPO}/git/blobs", payload)
        entries.append({"path": path, "mode": "100644",
                        "type": "blob", "sha": blob["sha"]})
        print(f"blob {status} {path} ({len(raw)//1024} KB)")

    tree = api("POST", f"/repos/{REPO}/git/trees",
               {"base_tree": base_tree, "tree": entries})
    print(f"tree {tree['sha'][:7]}")

    commit = api("POST", f"/repos/{REPO}/git/commits",
                 {"message": MESSAGE, "tree": tree["sha"],
                  "parents": [base_sha],
                  "author": AUTHOR, "committer": AUTHOR})
    print(f"commit {commit['sha']}")

    api("PATCH", f"/repos/{REPO}/git/refs/heads/{BRANCH}",
        {"sha": commit["sha"], "force": False})
    print(f"branch {BRANCH} now at {commit['sha'][:7]}")
    print(f"https://github.com/{REPO}/tree/{BRANCH}")
    return commit["sha"]


if __name__ == "__main__":
    main()
