require('dotenv').config();

module.exports = {
    apps: [
        {
            script: 'npm start',
        },
    ],

    deploy: {
        production: {
            user: 'ubuntu',
            host: process.env.EC2_HOST,
            ref: 'origin/main',
            repo: 'https://github.com/tkwonn/portfolio.git',
            path: '/home/ubuntu',
            'pre-deploy-local': '',
            'post-deploy':
                'source ~/.nvm/nvm.sh && npm install && npm run build:skip-lint && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            ssh_options: 'ForwardAgent=yes',
        },
    },
};
