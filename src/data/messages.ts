import type { SecurityMessage } from "../features/codeql-popup/types/security-message";

export const messages: SecurityMessage[] = [
  {
    title: "Cross-Site Scripting (XSS) Detected in Input Field",
    description:
      "A user-supplied input was rendered directly without proper sanitation, leading to a potential XSS vulnerability.",
  },
  {
    title: "SQL Injection Payload Found in Login Parameter",
    description:
      "The application log recorded an attempted SQL injection using common bypassing syntax on the authentication endpoint.",
  },
  {
    title: "Insecure Direct Object Reference (IDOR) Possible",
    description:
      "Direct object IDs are exposed in the URL, allowing unauthorized access to other user's resources by guessing or incrementing values.",
  },
  {
    title: "Broken Access Control: Admin Endpoint Exposed",
    description:
      "An administrative API route was accessed by a user lacking the necessary permissions, indicating a faulty authorization scheme.",
  },
  {
    title: "Server Misconfiguration: Directory Listing Enabled",
    description:
      "A critical web directory is configured to allow directory listing, exposing sensitive file structures and contents to the public.",
  },
  {
    title: "Sensitive Data Exposed via Unencrypted Channel",
    description:
      "User authentication credentials and session tokens are being transmitted over a non-HTTPS (insecure) connection, risking interception.",
  },
  {
    title: "Missing Rate Limiting on Authentication API",
    description:
      "The password reset or login endpoint lacks effective rate limiting, making it susceptible to brute-force attacks.",
  },
  {
    title: "Outdated Dependency Alert: Critical Flaw Found",
    description:
      "The application relies on a known vulnerable version of a core library, which needs immediate patching.",
  },
  {
    title: "CORS Misconfiguration Allows External Origin Access",
    description:
      "The Cross-Origin Resource Sharing (CORS) policy is set too broadly, allowing unauthorized external domains to make requests.",
  },
  {
    title: "Information Leakage via Error Messages",
    description:
      "Application error messages are too verbose, exposing internal system paths and database schemas to end-users.",
  },
  // --- Added 20 new entries below ---
  {
    title: "Missing HSTS Header for Secure Connection",
    description:
      "The HTTP Strict Transport Security (HSTS) header is absent, allowing downgrade attacks via insecure HTTP connections.",
  },
  {
    title: "Improper Input Handling Leads to Buffer Overflow",
    description:
      "A flaw in memory management allows input data to exceed allocated buffer size, causing a program crash or execution hijack.",
  },
  {
    title: "Weak Cryptographic Keys Used in Session Tokens",
    description:
      "Session tokens are generated with low-entropy keys, making them predictable and easily forgeable by attackers.",
  },
  {
    title: "XML External Entity (XXE) Processing Allowed",
    description:
      "The XML parser configuration permits processing of external entities, which can lead to data theft or denial of service (DoS).",
  },
  {
    title: "Client-Side Caching Exposes Private Data",
    description:
      "Sensitive application responses are improperly marked as cacheable by the browser, risking exposure upon subsequent unauthenticated access.",
  },
  {
    title: "Security Headers Insufficient or Missing",
    description:
      "Essential HTTP response headers (like X-Content-Type-Options) are missing or improperly configured, lowering defense against common attacks.",
  },
  {
    title: "Unvalidated Redirects and Forwards Vulnerability",
    description:
      "The application accepts destination URLs from user input without validation, allowing attackers to create phishing or malware links.",
  },
  {
    title: "Hardcoded Credentials Found in Source Code",
    description:
      "Database passwords or API keys were discovered directly embedded within the application source files, posing a high security risk.",
  },
  {
    title: "Broken Function Level Authorization Detected",
    description:
      "Endpoints that should be restricted to specific user roles (e.g., editors) can be accessed by standard users through direct requests.",
  },
  {
    title: "Mass Assignment Vulnerability in API Endpoint",
    description:
      "An API accepts unexpected or unrestricted fields, allowing an attacker to modify sensitive object properties they shouldn't have access to.",
  },
  {
    title: "Host Header Injection Risk on Web Server",
    description:
      "The application trusts the Host header for internal logic, enabling an attacker to poison cache entries or forge password reset links.",
  },
  {
    title: "Denial of Service (DoS) Due to Large Files",
    description:
      "The file upload mechanism lacks restrictions on file size, allowing an attacker to exhaust server resources with excessively large payloads.",
  },
  {
    title: "Clickjacking Vulnerability: Missing X-Frame-Options",
    description:
      "The lack of frame-busting security headers permits the page to be embedded in an iframe, facilitating clickjacking attacks.",
  },
  {
    title: "Weak Password Policy Allows Simple Passwords",
    description:
      "The system allows users to set short, common, or predictable passwords, making accounts vulnerable to dictionary attacks.",
  },
  {
    title: "Uncontrolled Resource Consumption in API",
    description:
      "An API query that returns a large dataset lacks pagination limits, potentially causing memory exhaustion on the server.",
  },
  {
    title: "Server Side Request Forgery (SSRF) Possible",
    description:
      "The application processes a user-supplied URL and fetches its contents, potentially allowing access to internal networks or metadata services.",
  },
  {
    title: "Deserialization of Untrusted Data Risk",
    description:
      "The application deserializes user-controlled data, which can lead to remote code execution (RCE) via malicious payloads.",
  },
  {
    title: "Insufficient Logging and Monitoring Activity",
    description:
      "Critical security events, such as failed logins or access attempts, are not adequately logged, hindering incident response capabilities.",
  },
  {
    title: "Privilege Escalation via Weak File Permissions",
    description:
      "Misconfigured file system permissions allow a low-privilege process to modify system files or sensitive configurations.",
  },
  {
    title: "Cross-Origin Write Access Enabled (COWA)",
    description:
      "A misconfiguration of cross-origin policies allows unauthorized scripts to submit forms or write data to the application's endpoints.",
  },
];
