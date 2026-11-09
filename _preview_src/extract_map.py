import json
import os
import urllib.request

BASE = "https://nadiyapara-family--9nelobpn.preview.emergentagent.com"
OUT = os.path.dirname(__file__)
MAPS = [
    f"{BASE}/static/js/bundle.js.map",
    f"{BASE}/static/js/src_components_three_HeroCanvas_jsx.chunk.js.map",
    f"{BASE}/static/js/src_components_three_BlessingsCanvas_jsx.chunk.js.map",
    f"{BASE}/static/js/src_components_three_FinaleCanvas_jsx.chunk.js.map",
]

for url in MAPS:
    name = url.rsplit("/", 1)[-1]
    path = os.path.join(OUT, name)
    print("Downloading", name)
    urllib.request.urlretrieve(url, path)
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    sources = data.get("sources") or []
    contents = data.get("sourcesContent") or []
    print(" ", name, "sources", len(sources), "contents", len(contents))
    for s, c in zip(sources, contents):
        if not c:
            continue
        norm = s.replace("\\", "/")
        if "node_modules" in norm:
            continue
        if "/src/" not in norm and not norm.startswith("webpack://frontend/./src/"):
            continue
        if "/src/" in norm:
            rel = norm.split("/src/", 1)[1]
        else:
            rel = norm.split("./src/", 1)[1]
        rel = rel.split("?")[0]
        dest = os.path.join(OUT, rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "w", encoding="utf-8") as wf:
            wf.write(c)
        print("  WROTE", rel, len(c))
