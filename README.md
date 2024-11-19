<h1 align="center">
  Portfolio Website
</h1>

## What is this?

This is a personal portfolio project designed to showcase my personal background, skills, and projects.

<br>

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

This project utilizes GitHub Actions for automated deployment.

| Job                     | Description                                                                                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Quality Checks** | - Husky and lint-staged are used in the local environment to automatically run Prettier and ESLint before each commit.<br>- The deployment job runs only if the code quality checks succeed. |
| **Deployment**          | - Automated deployment to the EC2 instance using PM2<br>- Triggered on pushes to the main branch                                                                                             |
