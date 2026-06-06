# AZURE BLOB STORAGE — Static Website Hosting
### Step-by-Step Assignment Guide

| Platform | Account Tier | Difficulty |
|----------|-------------|------------|
| Microsoft Azure Portal | Azure Free Tier Compatible | Beginner / Intermediate |

---

## 1. Assignment Overview & Learning Objectives

This guide walks you through every step needed to complete the Azure Blob Storage Static Website Hosting assignment. All steps are verified against the current Azure Portal (2025) and are fully compatible with a free-tier Azure account.

### What You Will Accomplish

- **Provision** an Azure Storage Account with appropriate settings.
- **Enable** static website hosting on Blob Storage.
- **Configure** index and error documents.
- **Upload** a sample HTML/CSS/JS website to the `$web` container.
- **Verify** the live deployment via the Azure-provided public URL.
- **Evaluate** security, redundancy, and CDN integration concepts.

> **ℹ️ INFO:** Azure Free Tier includes 5 GB of LRS Blob Storage capacity with 20,000 read operations and 10,000 write operations per month at no cost — more than enough for this assignment.

---

## 2. Prerequisites

### 2.1 Azure Account

You need a free Azure account. If you do not have one:

- Go to [https://azure.microsoft.com/free](https://azure.microsoft.com/free) and click **Start free**.
- Sign in with a Microsoft account (or create one).
- Complete identity verification — a credit/debit card is required for identity only; you will not be charged for free-tier resources.
- You receive **$200 USD credit** valid for 30 days, plus 12 months of popular free services.

> **⚠️ WARN:** If your free trial has expired, select the **Pay-As-You-Go** option. Blob Storage for this assignment costs only a few cents. Always delete resources after submission to avoid charges.

---

### 2.2 Website Source Files

Before you start in the Azure Portal, prepare a small static website on your local computer. Create a folder named **`mywebsite`** and add the three files below.

#### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Azure Static Site</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello from Azure Blob Storage!</h1>
  <p>This static site is hosted on Azure Blob Storage.</p>
  <script src="app.js"></script>
</body>
</html>
```

#### `style.css`

```css
body {
  font-family: Arial, sans-serif;
  background: #f0f4f8;
  display: flex;
  justify-content: center;
  padding: 60px;
}
h1 { color: #1F4E79; }
```

#### `404.html`

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Page Not Found</title></head>
<body>
  <h1>404 - Page Not Found</h1>
  <p><a href="/">Return to Home</a></p>
</body>
</html>
```

#### `app.js`

```js
console.log('Azure static site loaded successfully.');
```

---

## 3. Step-by-Step Instructions

---

### ✅ STEP 1 — Create a Storage Account

Sign in to the Azure Portal at [https://portal.azure.com](https://portal.azure.com).

- In the top search bar, type **Storage accounts** and select it from the results.
- On the Storage accounts page, click **+ Create** (top-left button).
- You will land on the **Create a storage account** page, organized into tabs: *Basics, Advanced, Networking, Data protection, Encryption, Tags, Review*.

#### Basics Tab — Fill In These Fields

| Field | Recommended Value |
|-------|-------------------|
| **Subscription** | Your free-tier subscription (e.g. `Azure subscription 1`) |
| **Resource group** | Click *Create new* → name it `rg-staticweb` (or any name you choose) |
| **Storage account name** | `mystatic` + your initials, e.g. `mystaticole` — must be globally unique, 3–24 lowercase chars, letters and numbers only |
| **Region** | West Europe |
| **Performance** | Standard (required for static website hosting; Premium does not support it) |
| **Redundancy** | Locally-redundant storage (LRS) — lowest cost, included in free tier |

> **ℹ️ INFO:** Standard performance is mandatory for static website hosting. Premium performance (Block blob storage accounts) does not support the Static website feature.

- Leave all other Basics fields at their defaults.
- Click **Review + create** at the bottom (you can skip the other tabs for this assignment).
- Azure will validate your settings. When you see **Validation passed**, click **Create**.
- Wait for deployment — this takes about 15–30 seconds. Click **Go to resource** when it completes.

> **📸 Screenshot opportunity:** Take a screenshot of the Storage account Overview page showing your account name, location, and redundancy (LRS). This is required for submission.

---

### ✅ STEP 2 — Enable Static Website Hosting

You are now inside your storage account. The left navigation panel contains all settings.

- In the left-side menu, scroll down to the **Data management** section.
- Click **Static website**.
- Toggle the switch to **Enabled**.
- In the **Index document name** field, type exactly: `index.html`
- In the **Error document path** field, type exactly: `404.html`
- Click **Save**.

> **ℹ️ INFO:** After saving, Azure automatically creates a special container called `$web` inside your storage account. All website files must be uploaded into this container. Do **NOT** rename or delete it.

On the same Static website page, you will now see two important URLs:

- **Primary endpoint** — e.g. `https://mystaticole.z13.web.core.windows.net/` — this is your live site URL.
- **Secondary endpoint** — only available if you enabled geo-redundancy (not needed for LRS).

> **📸 Screenshot opportunity:** Take a screenshot of the Static website settings page showing the Enabled status, index document, error document, and the primary endpoint URL.

---

### ✅ STEP 3 — Configure and Review Document Settings

You already set the index and error document names in Step 2. This step explains why the exact filenames matter.

| Document | Purpose |
|----------|---------|
| `index.html` | Served when a user visits the root URL (e.g. `https://yoursite.z13.web.core.windows.net/`). Also served for any path that ends without a filename. |
| `404.html` | Displayed when a user navigates to a URL that does not exist in the `$web` container — a custom *Page Not Found* experience. |

> **⚠️ WARN:** Filenames are **case-sensitive** in Azure Blob Storage. If you set the index document as `index.html` but upload a file named `Index.html`, the site will return an error. Always match case exactly.

---

### ✅ STEP 4 — Prepare and Upload Website Assets

#### 4.1 Navigate to the `$web` Container

- In the left-side menu of your storage account, under **Data storage**, click **Containers**.
- You will see the **`$web`** container that was auto-created in Step 2.
- Click on **`$web`** to open it.

#### 4.2 Upload Files

- Click the **Upload** button at the top of the `$web` container page.
- The **Upload blob** pane opens on the right side.
- Click the **Files** field and browse to your **`mywebsite`** folder.
- Select all files: `index.html`, `style.css`, `app.js`, and `404.html`.
- Leave all other settings at their defaults (Authentication type: SAS, Blob type: Block blob).
- Click **Upload**.

> **ℹ️ INFO:** If you have subfolders (e.g. `images/` or `css/`), you can upload them by expanding the *Advanced* section in the Upload pane and specifying an *Upload to folder* path.

> **📸 Screenshot opportunity:** Take a screenshot of the `$web` container showing all uploaded files listed with their names, last modified date, and sizes.

---

### ✅ STEP 5 — Verify the Deployment

- Go back to **Data management > Static website** in the left menu.
- Copy the **Primary endpoint** URL.
- Open a new browser tab and paste the URL. Press Enter.
- Your `index.html` page should load correctly.
- Test the 404 page by appending a non-existent path, e.g.:

```
https://yoursite.z13.web.core.windows.net/doesnotexist
```

- Confirm your custom `404.html` page is displayed instead of a generic Azure error.

> **⚠️ WARN:** If the page shows a 404 error instead of your content, check: (1) files are in the `$web` container, not a different container; (2) your index document name matches the uploaded filename exactly; (3) you saved the Static website settings.

> **📸 Screenshot opportunity:** Take a screenshot of your browser showing the live site loaded at the Azure endpoint URL. The URL bar must be visible.

---

### ✅ STEP 6 — Review Security and Scalability

#### 6.1 Access Levels Explained

Static website hosting in Azure uses a separate public endpoint (`*.web.core.windows.net`). Files in `$web` are served anonymously through the web endpoint — no authentication is required for visitors.

| Access Setting | Meaning for Static Sites |
|----------------|--------------------------|
| `$web` container access (private) | The container itself is private — you cannot list files via the Blob endpoint. But the web endpoint still serves files publicly. This is the correct and secure default. |
| Shared Access Signature (SAS) | Used when you upload files via the Portal. Grants temporary upload permissions to your management session. |
| Storage account key | Administrative access. Do not share this. Used only for management tasks, not needed for the live site. |

> **ℹ️ INFO:** You do **NOT** need to change the `$web` container access level to *Blob (public)*. The Static website feature creates its own public endpoint. Leaving `$web` as Private is the more secure configuration.

#### 6.2 Redundancy Options — Your Assignment Decision

For this assignment you selected **LRS (Locally-Redundant Storage)**. Here is the full comparison to justify your choice in your documentation:

| Redundancy | Copies |
|------------|--------|
| LRS (Locally-Redundant) | 3 within one data center |
| ZRS (Zone-Redundant) | 3 across availability zones |
| GRS (Geo-Redundant) | 6 across two regions |
| RA-GRS (Read-Access Geo) | 6 across two regions + read access |

> **ℹ️ INFO:** LRS is the correct choice for this assignment. It is free-tier compatible, sufficient for a portfolio or learning project, and keeps your costs at zero.

#### 6.3 CDN Integration (Conceptual Review)

For a production scenario, you would connect **Azure CDN** to your static site endpoint. CDN caches your files at edge locations worldwide so users load the site from a server near them, reducing latency.

**Benefits of adding Azure CDN:**

- **HTTPS on custom domain** — Azure Blob Storage does not natively support HTTPS for custom domains; CDN provides this.
- **Global performance** — files are cached in 100+ Azure edge locations.
- **Custom headers** — CDN rules allow you to add security headers (e.g. `Cache-Control`, `X-Content-Type-Options`).
- **Reduced storage costs** — cache hits reduce egress reads billed against your storage account.

> **ℹ️ INFO:** CDN is **NOT** required for this assignment submission. It is included here to satisfy the assignment's *Review Security and Scalability* task. You can mention it in your documentation as a production enhancement.

---

## 4. Submission Checklist

| Deliverable | Description |
|-------------|-------------|
| **GitHub Repository (public)** | Create a public repo and push all your source files (`index.html`, `style.css`, `app.js`, `404.html`). |
| **Live URL** | Paste the Azure primary endpoint URL in your repo `README.md`. |
| **Screenshot 1 — Storage Account Overview** | Shows account name, region, performance (Standard), and redundancy (LRS) in the Azure Portal. |
| **Screenshot 2 — Static Website Settings** | Shows the Static website page with Enabled toggle, index document, error document, and the primary endpoint URL. |
| **Screenshot 3 — `$web` Container Contents** | Shows all uploaded files listed inside the `$web` container. |
| **Screenshot 4 — Live Site in Browser** | Browser showing your live page loaded at the Azure endpoint URL (URL bar must be visible). |
| **Documentation (README.md)** | Brief written explanation of redundancy and performance choices — see Section 5 for a template. |
| **Source Code** | All website files in the repo root or a `/src` folder. |

---

## 5. README.md Documentation Template

Copy and complete this template for your GitHub repository `README.md`:

```markdown
# Azure Blob Storage Static Website

## Live URL
https://<your-storage-account>.z13.web.core.windows.net/

## Project Summary
This project hosts a static website using Azure Blob Storage static
website hosting — a serverless, cost-effective alternative to running
a traditional web server (Apache/Nginx on a VM).

## Configuration Choices

### Performance Tier: Standard
Standard performance was selected because it is the only tier that
supports the static website hosting feature. It stores data on HDDs
and is suitable for web content with moderate throughput needs.
Premium performance (SSD-backed) does not support static website
hosting and would add unnecessary cost.

### Redundancy: Locally-Redundant Storage (LRS)
LRS replicates data three times within a single Azure data center.
This was chosen because:
- It is included in the Azure free tier (5 GB Blob storage).
- A portfolio/learning site does not require regional failover.
- It is the lowest-cost option, suitable for non-critical workloads.

**Trade-off:** LRS does not protect against a full data center outage.
For a production site, ZRS (zone-redundant) or GRS (geo-redundant)
would provide higher availability at increased cost.

## Scalability
To scale globally, Azure CDN would be placed in front of the
storage endpoint to cache content at edge nodes worldwide,
enable HTTPS on custom domains, and reduce storage egress costs.

## Screenshots
See /screenshots folder in this repository.
```

---

## 6. Key Concepts for Your Understanding

| Concept | Explanation |
|---------|-------------|
| **Static vs Dynamic hosting** | Static sites serve pre-built HTML/CSS/JS files directly. Dynamic sites run server-side code (PHP, Node.js) to generate pages per request. Blob Storage only supports static. |
| **`$web` container** | A special Blob container auto-created by Azure when static website hosting is enabled. Files here are served via the web endpoint. |
| **Primary endpoint** | The auto-generated public URL for your static site. Format: `https://<account>.z[number].web.core.windows.net/` |
| **Blob vs Web endpoint** | The Blob endpoint (`*.blob.core.windows.net`) is for storage operations. The Web endpoint (`*.web.core.windows.net`) is for serving website content publicly. |
| **Serverless architecture** | No VMs or web servers to provision, patch, or scale. Azure manages the infrastructure; you only manage your content files. |
| **Access tiers** | Hot = frequent access (default, best for serving web content). Cool/Archive = infrequent access. Use Hot for your `$web` files. |

---

## 7. Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows 404 immediately after setup | Verify files are in `$web` (not another container). Check that `index.html` filename matches the Index document name setting exactly (case-sensitive). |
| 'Static website' option not visible in menu | Ensure your account type is General Purpose v2 (GPv2) Standard. Premium block blob accounts do not support this feature. |
| Storage account name already taken | Storage account names must be globally unique across all of Azure. Try adding random numbers, e.g. `mystaticole2025`. |
| CSS/JS not loading (broken styles) | Open browser DevTools (F12). Check the Console/Network tab for 404 errors on asset files. Ensure `style.css` and `app.js` were uploaded to `$web`. |
| Free trial subscription not visible | Sign in at `portal.azure.com` with the same Microsoft account used during free trial signup. Check Subscriptions in the portal. |
| Deployment fails with quota error | Unlikely for storage accounts on free tier. If seen, check your subscription has no policy restrictions under Subscriptions > Resource providers. |

---

**Official Microsoft documentation:** [https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)
