# Azure Node.js Deployment

A Node.js Express web application deployed to Microsoft Azure App Service as part of a PaaS cloud deployment project.

## Live URL

🔗 **[https://YOUR-APP-NAME.azurewebsites.net](https://YOUR-APP-NAME.azurewebsites.net)**

> Replace the URL above with your actual Azure App Service URL after deployment.

---

## Project Summary

This project covers deploying a web application to Azure App Service (PaaS), configuring environment variables, enabling GitHub-based continuous deployment, and exploring monitoring and scaling options in the Azure portal.

See `summary.txt` for the full writeup on runtime, pricing tier, and deployment method.

---

## Folder Structure

```
azure-node-app/
├── app.js                  # Express application entry point
├── package.json            # Node.js dependencies and start script
├── .gitignore
├── views/
│   └── index.ejs           # EJS HTML template
├── public/                 # Static assets (CSS, images if any)
├── screenshots/
│   ├── overview.png        # Azure Portal — App Service Overview blade
│   └── configuration.png  # Azure Portal — Configuration blade
├── summary.txt             # Runtime, pricing tier, deployment method
└── README.md
```

---

## Running Locally

```bash
npm install
npm start
```

Visit `http://localhost:3000` in your browser.

---

## Environment Variables

| Variable   | Purpose                            | Default          |
|------------|------------------------------------|------------------|
| `APP_ENV`  | Identifies the runtime environment | `development`    |
| `APP_NAME` | Display name shown in the UI       | `Azure Node App` |

These are set in Azure Portal under **Configuration → Application Settings**.
