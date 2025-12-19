# ML Notes

Welcome to my machine learning notes for personal reference and sharing.

## Quick start

- Install and serve locally:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

- To publish: create the GitHub repo `pushkarnagar.github.io` and push (commands in README).

## Structure suggestions

- Organize by topic folders under `docs/` (e.g., `00-basics`, `01-deep-learning`).
- Add notebooks converted to Markdown in `docs/notes/` or use `mkdocs-jupyter` plugin to render them directly.
