<h1 align="center">
  Portfolio Website
  <br>
</h1>

This is a personal portfolio project designed to showcase my personal background, skills, and projects.   
While it serves as a portfolio, the main objective is to gain experience in setting up a web server and deploying a static site to a cloud platform.

<br>

## Technologies Used

| **Category**                             | **Technology**                           |
|------------------------------------------|------------------------------------------|
| Hosting                                  | AWS EC2 (Ubuntu platform)                |
| Web server                               | NGINX                                    |
| Frontend language/framework/library      | TypeScript / Next.js / Tailwind CSS      |
| Others                                   | HTTPS with Certbot                       |

<br>

For easier future updates, I’ve organized my project to require changes solely in the JSON within the `projects.ts` file, rather than across multiple files (same for `experiences.ts` and `skills.ts`)

```TypeScript
export const projectsData = [
    {
      imageUrl: '',
      title: '',
      description: '',
      tags: ["tag1", "tag2", "tag3"],
      githubUrl: '',
      appUrl: '',
    },
    {
      imageUrl: '',
      title: '',
      description: '',
      tags: ["tag1", "tag2", "tag3"],
      githubUrl: '',
      appUrl: '',
    },
    ...
] as const;
```
