# ML Notes — pushkarnagar.github.io

This repo hosts my machine learning notes using MkDocs Material.

Local development

```bash
git init
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Publish to GitHub Pages

```bash
# Create the repo on GitHub (recommended via gh CLI):
gh repo create pushkarnagar.github.io --public --source=. --remote=origin --push

# or manually:
# git remote add origin git@github.com:pushkarnagar/pushkarnagar.github.io.git
# git branch -M main
# git add .
# git commit -m "Initial MkDocs scaffold"
# git push -u origin main
```

The included GitHub Actions workflow builds and deploys the site on pushes to `main`.
