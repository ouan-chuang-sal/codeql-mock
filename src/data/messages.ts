import type { SecurityMessage } from "../features/codeql-popup/types/security-message";

export const messages: SecurityMessage[] = [
  {
    title: "Cross-Site Scripting (XSS) Detected in Input Field",
    description:
      "A user-supplied input was rendered directly without proper sanitation, leading to a potential XSS vulnerability.",
    severity: "high",
    date: "2025-10-28T10:15:00Z",
    source: "src/api/routes/user.ts:45",
  },
  {
    title: "SQL Injection Payload Found in Login Parameter",
    description:
      "The application log recorded an attempted SQL injection using common bypassing syntax on the authentication endpoint.",
    severity: "critical",
    date: "2025-10-28T11:30:00Z",
    source: "src/database/auth/login.go:120",
  },
  {
    title: "Insecure Direct Object Reference (IDOR) Possible",
    description:
      "Direct object IDs are exposed in the URL, allowing unauthorized access to other user's resources by guessing or incrementing values.",
    severity: "high",
    date: "2025-10-29T08:00:00Z",
    source: "src/controllers/api/documentController.js:78",
  },
  {
    title: "Broken Access Control: Admin Endpoint Exposed",
    description:
      "An administrative API route was accessed by a user lacking the necessary permissions, indicating a faulty authorization scheme.",
    severity: "critical",
    date: "2025-10-29T09:45:00Z",
    source: "src/middleware/auth/roleCheck.php:33",
  },
  {
    title: "Server Misconfiguration: Directory Listing Enabled",
    description:
      "A critical web directory is configured to allow directory listing, exposing sensitive file structures and contents to the public.",
    severity: "medium",
    date: "2025-10-29T14:20:00Z",
    source: "config/nginx/default.conf:15",
  },
  {
    title: "Sensitive Data Exposed via Unencrypted Channel",
    description:
      "User authentication credentials and session tokens are being transmitted over a non-HTTPS (insecure) connection, risking interception.",
    severity: "critical",
    date: "2025-10-30T07:10:00Z",
    source: "config/server/app-settings.xml:5",
  },
  {
    title: "Missing Rate Limiting on Authentication API",
    description:
      "The password reset or login endpoint lacks effective rate limiting, making it susceptible to brute-force attacks.",
    severity: "high",
    date: "2025-10-30T10:05:00Z",
    source: "src/api/routes/auth.java:62",
  },
  {
    title: "Outdated Dependency Alert: Critical Flaw Found",
    description:
      "The application relies on a known vulnerable version of a core library, which needs immediate patching.",
    severity: "critical",
    date: "2025-10-30T13:40:00Z",
    source: "package.json:25",
  },
  {
    title: "CORS Misconfiguration Allows External Origin Access",
    description:
      "The Cross-Origin Resource Sharing (CORS) policy is set too broadly, allowing unauthorized external domains to make requests.",
    severity: "medium",
    date: "2025-10-31T09:15:00Z",
    source: "src/server/config/cors-setup.py:10",
  },
  {
    title: "Information Leakage via Error Messages",
    description:
      "Application error messages are too verbose, exposing internal system paths and database schemas to end-users.",
    severity: "low",
    date: "2025-10-31T11:55:00Z",
    source: "src/utils/errorHandler.cs:88",
  },
  {
    title: "Missing HSTS Header for Secure Connection",
    description:
      "The HTTP Strict Transport Security (HSTS) header is absent, allowing downgrade attacks via insecure HTTP connections.",
    severity: "medium",
    date: "2025-10-31T14:30:00Z",
    source: "config/server/web.config:42",
  },
  {
    title: "Improper Input Handling Leads to Buffer Overflow",
    description:
      "A flaw in memory management allows input data to exceed allocated buffer size, causing a program crash or execution hijack.",
    severity: "critical",
    date: "2025-11-01T08:45:00Z",
    source: "src/core/parser/dataProcessor.c:210",
  },
  {
    title: "Weak Cryptographic Keys Used in Session Tokens",
    description:
      "Session tokens are generated with low-entropy keys, making them predictable and easily forgeable by attackers.",
    severity: "high",
    date: "2025-11-01T10:20:00Z",
    source: "src/auth/sessionManager.rb:55",
  },
  {
    title: "XML External Entity (XXE) Processing Allowed",
    description:
      "The XML parser configuration permits processing of external entities, which can lead to data theft or denial of service (DoS).",
    severity: "high",
    date: "2025-11-01T12:05:00Z",
    source: "src/utils/xmlProcessor.vb:30",
  },
  {
    title: "Client-Side Caching Exposes Private Data",
    description:
      "Sensitive application responses are improperly marked as cacheable by the browser, risking exposure upon subsequent unauthenticated access.",
    severity: "medium",
    date: "2025-11-02T07:50:00Z",
    source: "src/api/middleware/cacheControl.ts:18",
  },
  {
    title: "Security Headers Insufficient or Missing",
    description:
      "Essential HTTP response headers (like X-Content-Type-Options) are missing or improperly configured, lowering defense against common attacks.",
    severity: "low",
    date: "2025-11-02T09:35:00Z",
    source: "config/apache/security.conf:90",
  },
  {
    title: "Unvalidated Redirects and Forwards Vulnerability",
    description:
      "The application accepts destination URLs from user input without validation, allowing attackers to create phishing or malware links.",
    severity: "medium",
    date: "2025-11-02T11:10:00Z",
    source: "src/controllers/redirect.js:15",
  },
  {
    title: "Hardcoded Credentials Found in Source Code",
    description:
      "Database passwords or API keys were discovered directly embedded within the application source files, posing a high security risk.",
    severity: "critical",
    date: "2025-11-03T08:15:00Z",
    source: "src/config/database.yaml:5",
  },
  {
    title: "Broken Function Level Authorization Detected",
    description:
      "Endpoints that should be restricted to specific user roles (e.g., editors) can be accessed by standard users through direct requests.",
    severity: "high",
    date: "2025-11-03T10:50:00Z",
    source: "src/api/routes/editor.ts:10",
  },
  {
    title: "Mass Assignment Vulnerability in API Endpoint",
    description:
      "An API accepts unexpected or unrestricted fields, allowing an attacker to modify sensitive object properties they shouldn't have access to.",
    severity: "medium",
    date: "2025-11-03T12:25:00Z",
    source: "src/controllers/api/userProfile.py:40",
  },
  {
    title: "Host Header Injection Risk on Web Server",
    description:
      "The application trusts the Host header for internal logic, enabling an attacker to poison cache entries or forge password reset links.",
    severity: "high",
    date: "2025-11-04T07:00:00Z",
    source: "src/utils/urlHelper.ts:22",
  },
  {
    title: "Denial of Service (DoS) Due to Large Files",
    description:
      "The file upload mechanism lacks restrictions on file size, allowing an attacker to exhaust server resources with excessively large payloads.",
    severity: "medium",
    date: "2025-11-04T09:10:00Z",
    source: "src/controllers/uploadService.java:180",
  },
  {
    title: "Clickjacking Vulnerability: Missing X-Frame-Options",
    description:
      "The lack of frame-busting security headers permits the page to be embedded in an iframe, facilitating clickjacking attacks.",
    severity: "low",
    date: "2025-11-04T11:45:00Z",
    source: "config/apache/vhost.conf:50",
  },
  {
    title: "Weak Password Policy Allows Simple Passwords",
    description:
      "The system allows users to set short, common, or predictable passwords, making accounts vulnerable to dictionary attacks.",
    severity: "low",
    date: "2025-11-05T08:30:00Z",
    source: "src/auth/policy/passwordValidator.cs:12",
  },
  {
    title: "Uncontrolled Resource Consumption in API",
    description:
      "An API query that returns a large dataset lacks pagination limits, potentially causing memory exhaustion on the server.",
    severity: "medium",
    date: "2025-11-05T10:00:00Z",
    source: "src/api/controllers/dataReport.go:95",
  },
  {
    title: "Server Side Request Forgery (SSRF) Possible",
    description:
      "The application processes a user-supplied URL and fetches its contents, potentially allowing access to internal networks or metadata services.",
    severity: "critical",
    date: "2025-11-05T13:15:00Z",
    source: "src/utils/fetcher.js:60",
  },
  {
    title: "Deserialization of Untrusted Data Risk",
    description:
      "The application deserializes user-controlled data, which can lead to remote code execution (RCE) via malicious payloads.",
    severity: "critical",
    date: "2025-11-06T09:05:00Z",
    source: "src/core/serialization/dataDeserializer.php:150",
  },
  {
    title: "Insufficient Logging and Monitoring Activity",
    description:
      "Critical security events, such as failed logins or access attempts, are not adequately logged, hindering incident response capabilities.",
    severity: "low",
    date: "2025-11-06T11:20:00Z",
    source: "src/config/logging.properties:2",
  },
  {
    title: "Privilege Escalation via Weak File Permissions",
    description:
      "Misconfigured file system permissions allow a low-privilege process to modify system files or sensitive configurations.",
    severity: "high",
    date: "2025-11-06T13:00:00Z",
    source: "config/os/install-script.sh:44",
  },
  {
    title: "Cross-Origin Write Access Enabled (COWA)",
    description:
      "A misconfiguration of cross-origin policies allows unauthorized scripts to submit forms or write data to the application's endpoints.",
    severity: "medium",
    date: "2025-11-07T08:55:00Z",
    source: "src/middleware/cors/setup.xml:10",
  },
];
