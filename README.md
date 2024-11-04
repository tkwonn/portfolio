<h1 align="center">
  Portfolio Website
</h1>

## What is this?

This is a personal portfolio project designed to showcase my personal background, skills, and projects.

## Table of Contents

-   [Built with](#built-with)
-   [Server Configuration](#server-configuration)
-   [CI/CD](#cicd)

## Built with

| **Category**    | **Technology**                    |
| --------------- | --------------------------------- |
| VM              | Amazon EC2                        |
| Web server      | Nginx                             |
| Process manager | PM2 (Process manager for Node.js) |
| Frontend        | TypeScript, Next.js, Tailwind CSS |
| CI/CD           | GitHub Actions                    |

## Server Configuration

| Category             | Feature                | Description                                                         |
| -------------------- | ---------------------- | ------------------------------------------------------------------- |
| **SSL/TLS**          | HTTPS Redirect         | Automatically redirects all HTTP traffic to HTTPS                   |
|                      | HTTP/2 Support         | Enabled for improved performance                                    |
|                      | SSL Certificate        | Used Let's Encrypt                                                  |
| **Security Headers** | X-Frame-Options        | - Prevents clickjacking attacks<br>- Allows same-origin frames only |
|                      | X-Content-Type-Options | Prevents MIME-type sniffing                                         |
|                      | X-XSS-Protection       | Blocks XSS attacks                                                  |
| **Reverse Proxy**    | Proxy Pass             | Forwards requests to Node.js application server (localhost:3000)    |

## CI/CD

This project utilizes GitHub Actions for automated deployment.

| Job                     | Description                                                                                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Quality Checks** | - Husky and lint-staged are used in the local environment to automatically run Prettier and ESLint before each commit.<br>- The deployment job runs only if the code quality checks succeed. |
| **Deployment**          | - Automated deployment to the EC2 instance using PM2<br>- Triggered on pushes to the main branch                                                                                             |
