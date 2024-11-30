# Portfolio Website

[![GitHub last commit](https://img.shields.io/github/last-commit/tkwonn/portfolio?color=chocolate)](https://github.com/tkwonn/portfolio/commits/)
[![deploy to EC2](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml)

<br>

## What is this

This is a personal portfolio project designed to showcase my personal background, skills, and projects.

**URL:** [taesokkwon.com](https://taesokkwon.com)

<br>

## Table of Contents

-   [Built with](#built-with)
-   [Server Configuration](#server-configuration)
    -   [SSL/TLS Setup](#ssltls-setup)
    -   [Security Headers](#security-headers)
    -   [Cache Settings](#cache-settings)
    -   [Reverse Proxy](#reverse-proxy)
-   [CI/CD](#cicd)
    -   [CI](#ci)
        -   [Dependency Caching](#dependency-caching)
        -   [Code Quality Check](#code-quality-check)
    -   [CD](#cd)
        -   [OpenID Connect for Secure AWS Authentication](#openid-connect-for-secure-aws-authentication)
        -   [AWS Systems Manager (SSM)](#aws-systems-manager-ssm)

<br>

## Built with

| **Category** | **Technology**                    |
| ------------ | --------------------------------- |
| VM           | Amazon EC2                        |
| Web server   | Nginx                             |
| Frontend     | TypeScript, Next.js, Tailwind CSS |
| CI/CD        | GitHub Actions                    |

＊ This site is fully static by using Next.js's Static Export and does not require Node.js.

<br>

## Server Configuration

#### SSL/TLS Setup

-   OpenSSL with LetsEncrypt
-   Set up a cron job to refetch certificates regularly

#### Security Headers

| **Header**                | **Description**                                                         |
| ------------------------- | ----------------------------------------------------------------------- |
| Strict-Transport-Security | Enforces secure (HTTPS) connections to the server                       |
| X-Content-Type-Options    | Prevents MIME-type sniffing, ensuring the declared content type is used |

#### Cache Settings

To optimize the performance and caching of the website, the following Nginx cache settings have been implemented.

```nginx
map $sent_http_content_type $cache_control {
    "text/html"                     "public, no-cache, must-revalidate";
    "~image/"                       "public, max-age=31536000, immutable";
    "~/_next/static/"               "public, max-age=31536000, immutable";
    default                         "public, no-cache";
}
```

**Explanation**

-   HTML Files (`text/html`): Not cached (`no-cache`) to ensure fresh content on each request.
-   Images and Next.js Static Assets (`~image/`, `~/_next/static/`): Cached for one year and marked as immutable.

Since Next.js uses hashed filenames for content updates, any changes automatically generate new filenames, ensuring updates are reflected despite the immutable setting (cache-busting).

#### Reverse Proxy

The server is configured to use a reverse proxy that forwards incoming requests to the appropriate backend services.

| **Server name**                                                    | **Backend Service**                             |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| [taesokkwon.com](https://taesokkwon.com)                           | Static site served by Nginx                     |
| [plantuml.taesokkwon.com](https://plantuml.taesokkwon.com)         | PHP application served by PHP-FPM (via FastCGI) |
| [text-snippet.taesokkwon.com](https://text-snippet.taesokkwon.com) | PHP application served by PHP-FPM (via FastCGI) |

<br>

## CI/CD

### CI

#### Dependency Caching

Utilizes npm cache and Next.js cache to speed up dependency installation by reusing previously installed modules.

#### Code Quality Check

Confirms that Prettier and ESLint checks, which are set up locally using Husky and lint-staged, were successfully completed.

### CD

#### OpenID Connect for Secure AWS Authentication

-   Uses OpenID Connect to securely assume an IAM role with short-lived tokens, eliminating the need to manage long-term AWS credentials as secrets.
-   Ensures secure cloud role operations by granting only the minimal necessary permissions (avoiding FullAccess roles) and verifying that access is restricted to the intended repository.

#### AWS Systems Manager (SSM)

-   Used SSM to execute commands on the EC2 instance after authentication, removing the need for direct SSH access or changes to security groups.
-   Key operations include:
    -   Pulling the latest code.
    -   Installing dependencies with `npm ci`.
    -   Building the application with `npm run build`.
    -   Reloading Nginx to apply changes.
