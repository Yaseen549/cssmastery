# PLAYGROUND_SECURITY.md — CSS Playground Security Specification & Architecture

## 1. Executive Summary & Policy

The **CSSMaster Playground** is engineered as a dedicated, high-performance, strictly isolated **HTML + CSS Execution Environment**.

> **MANDATE:**
> The CSS Playground supports HTML and CSS only. User-authored JavaScript execution is not supported. Never introduce JavaScript execution functionality into the playground.

By restricting user input strictly to HTML markup and CSS styling, the security posture is simplified:
1. **Zero JavaScript Execution:** Script execution is disabled natively at the browser engine level using an empty sandbox attribute (`sandbox=""`).
2. **Defensive Sanitization:** User-authored `<script>` tags are stripped via regex before rendering, and inline event handlers (`onclick`, `onload`, `onerror`, etc.) are neutralized to harmless `data-blocked-event="true"` attributes.
3. **Zero Console Telemetry:** No console interception, postMessage telemetry, or script runtime monitoring is needed or present.
4. **Client-Side Only:** Code is compiled directly into an in-memory `srcDoc` in the client browser. Under no circumstances is user-authored code evaluated or processed on the server.

---

## 2. Threat Model & Defenses

| Threat Vector | Description | Primary Defense | Enforcement Level |
| :--- | :--- | :--- | :--- |
| **User Script Execution (XSS)** | Attacker submits `<script>` tags or inline `onclick` handlers in HTML. | `sandbox=""` (omitting `allow-scripts`) + script stripping + handler neutralization | Native Browser Sandbox Engine & Pre-parser |
| **DOM Traversal & Parent Escape** | Malicious markup attempts to traverse `window.parent` or `top.document`. | Opaque origin iframe (`sandbox=""` without `allow-same-origin`) | Browser Cross-Origin Isolation |
| **Credential & Storage Access** | Code attempts to access parent `localStorage`, `sessionStorage`, or cookies. | Opaque `null` origin + absence of `allow-same-origin` | Browser Storage Sandbox |
| **Data Exfiltration** | Styles or markup attempt network requests to external servers. | Content Security Policy (`connect-src 'none'`) | Browser CSP Engine |
| **Parent Window Navigation** | Links or markup attempt to redirect the parent tab. | Absence of `allow-top-navigation` and `allow-top-navigation-by-user-activation` | Browser Sandbox Policy |
| **Popup Abuse** | Code attempts to spawn unsolicited windows via `target="_blank"`. | Absence of `allow-popups` and `allow-popups-to-escape-sandbox` | Browser Sandbox Policy |
| **Form Hijacking** | Injected `<form>` elements attempt to submit sensitive data externally. | Absence of `allow-forms` + CSP `form-action 'none'` | Dual Sandbox & CSP |
| **Nested Iframe Attacks** | Markup contains nested `<iframe>` tags to bypass constraints. | CSP `frame-src 'none'` | Browser CSP Engine |
| **Worker / Background Threats** | Markup attempts to instantiate Web Workers or Service Workers. | Absence of `allow-scripts` + CSP `worker-src 'none'` | Browser Sandbox & CSP |

---

## 3. Sandboxed Iframe Configuration

The preview container is configured with the most restrictive sandbox possible:

```html
<iframe
  srcDoc={bundledHtml}
  sandbox=""
  title="CSS Playground Sandboxed Output"
/>
```

### Sandbox Permissions Audit

- **`sandbox=""` (Empty String):**
  - **No `allow-scripts`:** The browser's JavaScript execution engine is completely turned off for the child context. Even if a `<script>` tag or event handler bypasses parsing filters, the browser engine refuses to execute it.
  - **No `allow-same-origin`:** Treats the document as originating from a unique opaque origin (`null`). No access to parent `document`, `localStorage`, or cookies.
  - **No `allow-top-navigation`:** Prevents top-level redirects.
  - **No `allow-forms`:** Disables all form submissions.
  - **No `allow-popups`:** Blocks `window.open` and new window creation.
  - **No `allow-downloads`:** Prevents drive-by file downloads.

---

## 4. Content Security Policy (CSP)

Injected into the `<head>` of the preview document:

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'none';
  style-src 'unsafe-inline';
  img-src data: blob:;
  font-src data:;
  media-src data: blob:;
  connect-src 'none';
  object-src 'none';
  frame-src 'none';
  form-action 'none';
  base-uri 'none';
">
```

### Directive Breakdown

- **`default-src 'none'`:** Default deny for all resource types.
- **`style-src 'unsafe-inline'`:** Permits user-authored CSS declarations inside the `<style>` block, while disallowing external remote stylesheets.
- **`img-src data: blob:`:** Permits embedded base64 images and vector data URIs.
- **`font-src data:`:** Permits embedded web fonts.
- **`media-src data: blob:`:** Permits embedded audio/video media clips.
- **`connect-src 'none'`:** Completely blocks all outbound network requests (`fetch`, `XMLHttpRequest`, `WebSocket`, `WebRTC`, `sendBeacon`).
- **`object-src 'none'`:** Disables legacy plugins (`<object>`, `<embed>`).
- **`frame-src 'none'`:** Blocks child nested frames.
- **`form-action 'none'`:** Blocks all form action submissions.
- **`base-uri 'none'`:** Prevents `<base>` tag injection attacks.

---

## 5. Pre-Render Neutralization Pipeline

Before code is assembled into the preview document, it passes through the pre-render pipeline:

```javascript
// 1. Strip all <script>...</script> tags entirely
const strippedHtml = rawHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// 2. Neutralize inline event handlers (onclick, onload, onerror, etc.)
const safeHtml = strippedHtml.replace(/\s+on[a-zA-Z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, ' data-blocked-event="true"');
```

This guarantees clean DOM markup and prevents syntax errors or console warnings in developer tools, backed by the impenetrable native `sandbox=""` barrier.

---

## 6. Architecture Comparison

| Feature | Legacy Playground (Mode A + Mode B) | Dedicated HTML + CSS Playground (Current) |
| :--- | :--- | :--- |
| **Supported Languages** | HTML, CSS, JavaScript | **HTML and CSS Only** |
| **Iframe Sandbox** | `sandbox="allow-scripts"` | **`sandbox=""` (Zero scripts allowed)** |
| **JavaScript Editor** | Present (`script.js`) | **Removed** |
| **Console Panel** | Present (postMessage telemetry drawer) | **Removed (144px more vertical canvas)** |
| **Security Banners** | Mode B warning modals & alerts | **Not needed (Zero script execution surface)** |
| **Execution Performance** | Overhead of script instrumentation & event hooks | **Instantaneous, lightweight DOM rendering** |
