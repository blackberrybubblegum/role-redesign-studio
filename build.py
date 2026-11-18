"""Builds dist/index.html, a single self-contained page, from the files in src/.

Run `npm install` inside dls/ once, then `python3 build.py` after every change.
"""
import pathlib
import subprocess

root = pathlib.Path(__file__).resolve().parent
src = root / "src"
dls = root / "dls"

# Compile the UAE Design System v3.0.7 (MIT) component styles with Tailwind v4.
subprocess.run(["npx", "@tailwindcss/cli", "-i", "input.css", "-o", "dls.css", "--minify"], cwd=dls, check=True, capture_output=True)
dark = (dls / "node_modules/@aegov/design-system/src/theme/dark-tokens.css").read_text()

# Layer order: the design system's components sit above the app's own styles; tweaks.css overrides both.
css = (
    "/* UAE Design System v3.0.7, MIT licence, (c) TDRA. */\n"
    "@layer theme, base, app, components, utilities, tweaks;\n"
    + (dls / "dls.css").read_text() + "\n"
    + "@layer app {\n" + dark + "\n" + (src / "styles.css").read_text() + "\n}\n"
    + "@layer tweaks {\n" + (src / "tweaks.css").read_text() + "\n}\n"
)
html = (src / "template.html").read_text()
html = html.replace("/*STYLES*/", css)
html = html.replace("/*DATA*/", (src / "data.js").read_text())
html = html.replace("/*APP*/", (src / "app.js").read_text())
out = root / "dist" / "index.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html)
print(f"Built {out.relative_to(root)} ({len(html) // 1024} KB)")
