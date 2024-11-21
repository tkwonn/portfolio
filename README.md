# Portfolio Website

[![GitHub last commit](https://img.shields.io/github/last-commit/tkwonn/portfolio?color=chocolate)](https://github.com/tkwonn/portfolio/commits/)
[![deploy to EC2](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml)

## About

This is a personal portfolio project designed to showcase my personal background, skills, and projects.

**URL:** [taesokkwon.com](https://taesokkwon.com)

## Built with

| **Category**    | **Technology**                    |
| --------------- | --------------------------------- |
| VM              | Amazon EC2                        |
| Web server      | Nginx                             |
| Process manager | PM2                               |
| Frontend        | TypeScript, Next.js, Tailwind CSS |
| CI/CD           | GitHub Actions                    |

## Server Configuration

**HTTPS Configuration**

-   OpenSSL with LetsEncrypt
-   Set up a cron job to refetch certificates regularly

<br>

**Security Headers**

| **Header**             | **Description**                                                         |
| ---------------------- | ----------------------------------------------------------------------- |
| X-Frame-Options        | Prevents clickjacking attacks by allowing only same-origin frames       |
| X-Content-Type-Options | Prevents MIME-type sniffing, ensuring the declared content type is used |
| X-XSS-Protection       | Enables built-in browser protection against XSS attacks                 |

<br>

**Reverse Proxy**

The server is configured to use a reverse proxy that forwards incoming requests to the appropriate backend services.

| **Server name**                                                    | **Backend Service**                                              |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| [taesokkwon.com](https://taesokkwon.com)                           | Node.js application server running on `localhost:3000` (via TCP) |
| [plantuml.taesokkwon.com](https://plantuml.taesokkwon.com)         | PHP application served by PHP-FPM (via FastCGI)                  |
| [text-snippet.taesokkwon.com](https://text-snippet.taesokkwon.com) | PHP application served by PHP-FPM (via FastCGI)                  |

## CI/CD

### CI

**Dependency Caching**

Utilizes npm cache to speed up dependency installation by reusing previously installed modules.

**Code Quality Check**

Confirms that Prettier and ESLint checks, which are set up locally using Husky and lint-staged, were successfully completed.

### CD

**OpenID Connect for Secure AWS Authentication**

-   Uses OpenID Connect to securely assume an IAM role with short-lived tokens, eliminating the need to manage long-term AWS credentials as secrets.
-   Ensures secure cloud role operations by granting only the minimal necessary permissions (avoiding FullAccess roles) and verifying that access is restricted to the intended repository.

**AWS Systems Manager (SSM)**

-   Used SSM to execute commands on the EC2 instance after authentication, removing the need for direct SSH access or changes to security groups.
-   Key operations include:
    -   Pulling the latest code.
    -   Installing dependencies with `npm ci`.
    -   Building the application with `npm run build`.
    -   Managing the application with PM2 (start/restart/save).
