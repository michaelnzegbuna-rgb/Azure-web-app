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
Based on the assessor's feedback, you are not failing because your application does not work. You lost marks because the Azure infrastructure documentation required by the rubric is missing or incomplete.

To move from **45/100 to 60+**, focus on adding the missing Azure evidence and explanations.

## What You Already Have

✅ Functional Node.js/Express application

✅ Successful deployment to Azure App Service

✅ Environment variables configured

✅ GitHub deployment mentioned

✅ README structure and local setup instructions

These areas were positively acknowledged.

---

# What You Must Add

## 1. Azure Portal Overview Screenshot

Take a screenshot of:

**Azure Portal → App Service → Overview**

The screenshot should clearly show:

* App Service Name
* Subscription
* Resource Group
* Status (Running)
* Region
* URL
* Runtime Stack (Node.js)
* App Service Plan

Add it to your repository:

```text
screenshots/
 ├── app-service-overview.png
```

---

## 2. Azure Configuration Screenshot

Go to:

```text
Azure Portal
→ App Service
→ Settings
→ Environment Variables (or Configuration)
```

Show:

```text
APP_ENV=production
APP_NAME=Your App Name
```

Take a screenshot proving these values exist.

Save as:

```text
screenshots/
 ├── configuration-blade.png
```

This directly addresses the assessor's comment:

> "required screenshot of the Azure Portal Configuration blade is missing"

---

# 3. Replace Placeholder URL in README

The assessor specifically noted:

> "The live URL is a placeholder."

Instead of:

```md
https://your-app-name.azurewebsites.net
```

Use your actual URL:

```md
https://my-node-app.azurewebsites.net
```

Add a section:

```md
## Live Application

Application URL:

https://my-node-app.azurewebsites.net

The application is accessible publicly through HTTPS and can be reached from any web browser.
```

---

# 4. Add Pricing Tier Justification

Create a new README section.

### Example

## App Service Plan and Pricing Tier

The application was deployed using the Azure App Service Free Tier (F1).

Reason for Selection:

* The application is a learning project and does not require production-level performance.
* F1 allows deployment and testing without additional cost.
* It provides sufficient resources for a lightweight Node.js application.
* It is ideal for development, experimentation, and proof-of-concept deployments.

Limitations of F1:

* No autoscaling support.
* Limited CPU and memory resources.
* Shared infrastructure.
* No SLA for production workloads.

For production environments, a Basic (B1) or Standard (S1) tier would be more appropriate because they provide dedicated resources and additional scaling options.

---

# 5. Add Region and Operating System Justification

The assessor requested:

> "Provide a written justification for region and operating system."

Add this section.

## Region and Operating System Selection

Region Selected:
UK South (replace with your actual region)

Reason:

* Provides reliable Azure infrastructure.
* Offers low latency for users located close to the deployment region.
* Supports the required App Service features.

Operating System:
Linux

Reason:

* Node.js applications run efficiently on Linux.
* Lower resource overhead compared to Windows.
* Commonly used for cloud-native web applications.
* Better compatibility with open-source technologies.

---

# 6. Add Monitoring Documentation

This is one of the biggest missing sections.

Take screenshots of:

```text
App Service
→ Monitoring
→ Log Stream
```

and/or

```text
App Service
→ Application Insights
```

Save as:

```text
screenshots/
 ├── log-stream.png
 ├── application-insights.png
```

Add documentation:

## Monitoring and Diagnostics

Azure monitoring tools were used to observe application health and performance.

Tools Reviewed:

1. Log Stream

   * Provides real-time application logs.
   * Useful for troubleshooting deployment and runtime issues.

2. Application Insights

   * Collects telemetry data.
   * Tracks requests, failures, and application performance.
   * Helps identify bottlenecks and errors.

Benefits:

* Faster troubleshooting.
* Visibility into application performance.
* Improved operational monitoring.

---

# 7. Add Scaling Explanation

The assessor specifically said:

> "No actual explanation of the strategy, tier-specific limits, or auto-scaling configuration."

Add:

## Scaling and Optimization

Scaling in Azure App Service can be achieved in two ways:

### Vertical Scaling (Scale Up)

Increase resources such as:

* CPU
* Memory
* Storage

Example:
Move from F1 Free Tier to B1 Basic or S1 Standard.

### Horizontal Scaling (Scale Out)

Increase the number of application instances.

Benefits:

* Improved availability
* Better handling of high traffic
* Load distribution across instances

Current Deployment

The application currently uses the F1 Free Tier.

Limitations:

* Single instance only
* No autoscaling
* Limited resources

Production Recommendation

For production workloads, the Standard (S1) tier would be preferred because it supports autoscaling and multiple instances.

---

# 8. Add Deployment Method Details

The assessor could not see evidence of your deployment process.

Add:

```md
## Deployment Method

The application was deployed using GitHub Continuous Deployment.

Process:

1. Source code pushed to GitHub.
2. Azure Deployment Center connected to GitHub repository.
3. Azure automatically built the application.
4. Deployment completed successfully.
5. Application became available through the Azure App Service URL.

Benefits:

- Automated deployments.
- Reduced manual effort.
- Consistent release process.
```

---

# Recommended Repository Structure

```text
Azure-AppService-Project/
│
├── app.js
├── package.json
├── README.md
│
├── screenshots/
│   ├── app-service-overview.png
│   ├── configuration-blade.png
│   ├── log-stream.png
│   ├── application-insights.png
│   ├── deployment-success.png
│
└── docs/
    └── azure-summary.md
```

# Expected Score Improvement

If you add:

* Overview screenshot ✔
* Configuration screenshot ✔
* Real URL ✔
* Pricing tier explanation ✔
* Region/OS justification ✔
* Monitoring documentation ✔
* Scaling explanation ✔
* Deployment details ✔

you should satisfy nearly every item specifically identified in the feedback and should reasonably move above the **60% pass mark**, assuming the screenshots clearly show the Azure resources and settings requested by the rubric.
