# Portfolio Website

[![GitHub last commit](https://img.shields.io/github/last-commit/tkwonn/portfolio?color=chocolate)](https://github.com/tkwonn/portfolio/commits/)
[![deploy to EC2](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml)

## Table of Contents

-   [About](#-about)
-   [Built with](#️-built-with)
-   [Architecture](#️-architecture)
-   [Server Configuration](#️-server-configuration)
-   [CI/CD](#-cicd)

## 💡 About

This is a personal portfolio project designed to showcase my personal background, skills, and projects.

**URL:** [taesokkwon.com](https://taesokkwon.com)

## 🏗️ Built with

| **Category** | **Technology**                    |
| ------------ | --------------------------------- |
| VM           | Amazon EC2                        |
| Web server   | Nginx                             |
| Frontend     | TypeScript, Next.js, Tailwind CSS |
| CI/CD        | GitHub Actions                    |

This site is fully static by using Next.js's Static Export and does not require Node.js.

## 🏛️ Architecture

This website is hosted on a single AWS EC2 instance and uses Nginx as a reverse proxy to manage multiple services under different domains.

| **Server name**                                                                               | **Backend Service**                             | **GitHub Repository**                                                       |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| <a href="https://taesokkwon.com" target="_blank">taesokkwon.com</a>                           | Static site served by Nginx                     | -                                                                           |
| <a href="https://plantuml.taesokkwon.com" target="_blank">plantuml.taesokkwon.com</a>         | PHP application served by PHP-FPM (via FastCGI) | <a href="https://github.com/tkwonn/plantuml" target="_blank">README</a>     |
| <a href="https://text-snippet.taesokkwon.com" target="_blank">text-snippet.taesokkwon.com</a> | PHP application served by PHP-FPM (via FastCGI) | <a href="https://github.com/tkwonn/text-snippet" target="_blank">README</a> |

![System Architecture](docs/architecture.svg)

## ⚙️ Server Configuration

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

## 🚀 CI/CD

This project uses GitHub Actions to automate testing and deployment workflows with the following configurations.

#### Continuous Integration

-   Utilizes npm cache and Next.js cache to speed up builds
-   Code quality checks using Prettier and ESLint

#### Continuous Deployment

-   Secure AWS Authentication using OpenID Connect (short-lived tokens)
-   Minimal IAM permissions to ensure secure cloud role operations
-   AWS Systems Manager (SSM) for secure remote command execution (no direct SSH access or security group changes)
