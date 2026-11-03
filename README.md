# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Contact form

The Get In Touch form sends messages through EmailJS to `skharish2766@gmail.com`.

1. Create an EmailJS service and email template.
2. Set the template recipient to `{{to_email}}` (or directly to `skharish2766@gmail.com`).
3. Copy `.env.example` to `.env` and fill in the service ID, template ID, and public key.
4. Restart the Vite dev server after changing `.env`.

The template receives `from_name`, `from_email`, `message`, and `to_email`.

## GitHub Pages deployment

The `main` branch deploys automatically to GitHub Pages through `.github/workflows/deploy.yml`.
Add these repository secrets under **Settings > Secrets and variables > Actions**:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

In **Settings > Pages**, set the source to **GitHub Actions**. The deployed site will be available at `https://harish2766.github.io/Assets/`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
