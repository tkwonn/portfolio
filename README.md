# Portfolio Website

[![GitHub last commit](https://img.shields.io/github/last-commit/tkwonn/portfolio?color=chocolate)](https://github.com/tkwonn/portfolio/commits/)
[![deploy to EC2](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml)

## What is this

This is a personal portfolio project designed to showcase my personal background, skills, and projects.

**URL:** [taesokkwon.com](https://taesokkwon.com)

<br>

## Table of Contents

1. [Built with](#built-with)
2. [Architecture](#architecture)
3. [Server Configuration](#server-configuration)
    1. [SSL/TLS Setup](#ssltls-setup)
    2. [Security Headers](#security-headers)
    3. [Cache Control Settings](#cache-control-settings)
4. [CI/CD](#cicd)
    1. [Continuous Integration](#continuous-integration)
    2. [Continuous Delivery](#continuous-deployment)

<br>

## Built with

| **Category** | **Technology**                    |
| ------------ | --------------------------------- |
| VM           | Amazon EC2                        |
| Web server   | Nginx                             |
| Frontend     | TypeScript, Next.js, Tailwind CSS |
| CI/CD        | GitHub Actions                    |

This site is fully static by using Next.js's Static Export and does not require Node.js.

<br>

## Architecture

This website is hosted on a single AWS EC2 instance and uses Nginx as a reverse proxy to manage multiple services under different domains.

| **Server name**                                                    | **Backend Service**                             |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| [taesokkwon.com](https://taesokkwon.com)                           | Static site served by Nginx                     |
| [plantuml.taesokkwon.com](https://plantuml.taesokkwon.com)         | PHP application served by PHP-FPM (via FastCGI) |
| [text-snippet.taesokkwon.com](https://text-snippet.taesokkwon.com) | PHP application served by PHP-FPM (via FastCGI) |

<br>

![System Architecture](docs/architecture.svg)

## Server Configuration

#### SSL/TLS Setup

-   All services are secured with SSL/TLS certificates managed through LetsEncrypt (automatic certificate renewal via Certbot's systemd timer)

#### Security Headers

| **Header**                | **Description**                                                         |
| ------------------------- | ----------------------------------------------------------------------- |
| Strict-Transport-Security | Enforces secure (HTTPS) connections to the server                       |
| X-Content-Type-Options    | Prevents MIME-type sniffing, ensuring the declared content type is used |

#### Cache Control Settings

The Cache-Control headers are configured by content type:

```nginx
map $sent_http_content_type $cache_control {
    "text/html"                     "public, no-cache, must-revalidate";
    "~image/"                       "public, max-age=31536000, immutable";
    "~/_next/static/"               "public, max-age=31536000, immutable";
    default                         "public, no-cache";
}
```

-   HTML: No caching, always serves fresh content.
-   Images and static files: Cached for one year and marked as immutable.

Since Next.js generates unique filenames for each build, any changes automatically generate new filenames, ensuring updates are reflected despite the immutable setting (cache-busting).

Additionally, the following compression settings reduce transfer sizes:

```nginx
gzip on;
gzip_types text/plain text/css application/javascript application/json image/svg+xml;
```

<br>

## CI/CD

The project uses GitHub Actions to automate testing and deployment workflows with the following configurations:

### Continuous Integration

-   Utilizes npm cache and Next.js cache to speed up builds
-   Code quality checks using Prettier and ESLint

### Continuous Deployment

-   Secure AWS Authentication using OpenID Connect (short-lived tokens)
-   Minimal IAM permissions to ensure secure cloud role operations
-   AWS Systems Manager (SSM) for secure remote command execution (no direct SSH access or security group changes)
