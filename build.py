#!/usr/bin/env python3
"""Build the NEXORIA static portfolio into ./dist using only the Python standard library."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
ASSETS = ROOT / "assets"

def build() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)
    shutil.copy2(ROOT / "index.html", DIST / "index.html")
    if ASSETS.exists():
        shutil.copytree(ASSETS, DIST / "assets")
    print(f"Built static portfolio: {DIST}")
    print("Preview with: python -m http.server 8000 --directory dist")

if __name__ == "__main__":
    build()
