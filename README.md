# Portfolio Website

[![GitHub last commit](https://img.shields.io/github/last-commit/tkwonn/portfolio?color=chocolate)](https://github.com/tkwonn/portfolio/commits/)
[![deploy to EC2](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/tkwonn/portfolio/actions/workflows/deploy.yml)

## About

This is a personal portfolio project designed to showcase my personal background, skills, and projects.

## Built with

| **Category**    | **Technology**                    |
| --------------- | --------------------------------- |
| VM              | Amazon EC2                        |
| Web server      | Nginx                             |
| Process manager | PM2 (Process manager for Node.js) |
| Frontend        | TypeScript, Next.js, Tailwind CSS |
| CI/CD           | GitHub Actions                    |

<br>

## Server Configuration

**HTTPS Configuration**

-   OpenSSL with LetsEncrypt
-   Set up a cron job to refetch certificates regularly

<br>

**Security Headers**

| **Header**             | **Description**                                                                |
| ---------------------- | ------------------------------------------------------------------------------ |
| X-Frame-Options        | Prevents clickjacking attacks by allowing only same-origin frames              |
| X-Content-Type-Options | Prevents MIME-type sniffing, ensuring the declared content type is used        |
| X-XSS-Protection       | Enables built-in browser protection against cross-site scripting (XSS) attacks |

<br>

**Reverse Proxy**

The server is configured to use a reverse proxy that forwards incoming requests to the appropriate backend services.

| **Server name**                                            | **Backend Service**                                              |
| ---------------------------------------------------------- | ---------------------------------------------------------------- |
| [taesokkwon.com](https://taesokkwon.com)                   | Node.js application server running on `localhost:3000` (via TCP) |
| [plantuml.taesokkwon.com](https://plantuml.taesokkwon.com) | PHP application served by PHP-FPM (via FastCGI)                  |

<br>

## CI/CD

This project utilizes GitHub Actions for automated deployment, ensuring a streamlined and secure workflow.

| Job                     | Description                                                                                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Quality Checks** | - Husky and lint-staged are used in the local environment to automatically run Prettier and ESLint before each commit.<br>- The deployment job runs only if the code quality checks succeed. |
| **Deployment**          | - Automated deployment to the EC2 instance using PM2<br>- Triggered on pushes to the main branch                                                                                             |

### Highlights

1. **OIDC Connect for Secure AWS Authentication**

    - GitHub Actions uses OIDC Connect to securely assume an IAM role, eliminating the need to store long-term AWS credentials as secrets.
    - The workflow dynamically obtains a short-lived token to access AWS resources, adhering to best security practices.

2. **AWS Systems Manager (SSM) for Command Execution**

    - The deployment job utilizes AWS SSM to execute commands on the EC2 instance without requiring direct SSH access.
    - Key operations include:
        - Pulling the latest changes from the `main` branch.
        - Installing dependencies with `npm ci`.
        - Building the project with `npm run build`.
        - Managing the application with PM2 (start/restart/save).

3. **Real-Time Logs**
    - The deployment workflow retrieves and monitors SSM command logs in real-time.
    - Errors or timeouts during deployment are captured and reflected directly in the GitHub Actions logs.
