"""
deploy.py — Build + Upload FTP para Hostinger
Uso: python3 deploy.py
"""

import ftplib
import os
import subprocess
import sys

# ── Configurações FTP ──────────────────────────────────────────────
FTP_HOST     = "82.25.67.111"
FTP_PORT     = 21
FTP_USER     = "u636536733"
FTP_PASS     = "1234Claudecode!"
FTP_REMOTE   = "/domains/olucasvilaronga.com.br/public_html"

# ── Diretórios ────────────────────────────────────────────────────
SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
BUILD_DIR    = "/tmp/dist-pcav"   # fora do projeto para evitar conflitos de permissão
PUBLIC_DIR   = os.path.join(SCRIPT_DIR, "public")


def build():
    print("🔨 Fazendo build...")
    result = subprocess.run(
        ["npx", "vite", "build", "--outDir", BUILD_DIR, "--emptyOutDir"],
        cwd=SCRIPT_DIR
    )
    if result.returncode != 0:
        print("❌ Build falhou. Deploy cancelado.")
        sys.exit(1)
    # Copia arquivos da pasta public (favicon, robots.txt etc.)
    import shutil
    for item in os.listdir(PUBLIC_DIR):
        shutil.copy2(os.path.join(PUBLIC_DIR, item), BUILD_DIR)
    print("✅ Build concluído.\n")


def upload_dir(ftp, local_path, remote_path):
    try:
        ftp.mkd(remote_path)
    except ftplib.error_perm:
        pass  # diretório já existe

    for item in sorted(os.listdir(local_path)):
        local_item  = os.path.join(local_path, item)
        remote_item = f"{remote_path}/{item}"

        if os.path.isdir(local_item):
            upload_dir(ftp, local_item, remote_item)
        else:
            with open(local_item, "rb") as f:
                ftp.storbinary(f"STOR {remote_item}", f)
            print(f"  ✓ {item}")


def deploy():
    print(f"🚀 Conectando a {FTP_HOST}...")
    with ftplib.FTP() as ftp:
        ftp.connect(FTP_HOST, FTP_PORT, timeout=30)
        ftp.login(FTP_USER, FTP_PASS)
        print("Conectado. Enviando arquivos...\n")
        upload_dir(ftp, BUILD_DIR, FTP_REMOTE)
    print("\n✅ Deploy concluído! Site no ar: https://olucasvilaronga.com.br")


if __name__ == "__main__":
    build()
    deploy()
