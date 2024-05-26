<h1 align="center">
  Portfolio Website
  <br>
</h1>

This is a personal portfolio project designed to showcase my personal background, skills, and projects.   
While it serves as a portfolio, the main objective is to gain experience in setting up a web server and deploying a static site to a cloud platform.

## Technologies Used

| **Category**                             | **Technology**                           |
|------------------------------------------|------------------------------------------|
| Hosting                                  | AWS EC2 (Ubuntu platform)                |
| Web server                               | NGINX                                    |
| Process manager                          | PM2                                      |
| Frontend language/framework/library      | TypeScript / Next.js / Tailwind CSS      |
| Others                                   | HTTPS with Certbot                       |

### NGINX Configuration

- Set up a reverse proxy


```nginx
server {
    server_name example.com www.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl http2;
    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;
    include /path/to/ssl-config-options.conf; 
    ssl_dhparam /path/to/ssl-dhparams.pem;
}
```

### PM2 Configuration


- Used PM2 for automatic restarts and monitoring.
- This script is used for deploying the application to an AWS EC2 instance from local environment.

```javascript
module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'server_ip',
      ref  : 'origin/main',
      repo : 'https://github.com/username/repository.git',
      path : '/path/to/deployment',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes',
    }
  }  
};
```

### Frontend Configuration

To simplify future updates, I’ve organized my project to require changes solely in the JSON within the `projects.ts` file (same for `experiences.ts` and `skills.ts`).

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
