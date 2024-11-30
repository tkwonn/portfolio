import { Project } from '@/type';
import ping from '../../public/assets/img/ping.png';
import traceroute from '../../public/assets/img/traceroute.png';

export const projects: Project[] = [
    // {
    //     image: traceroute,
    //     title: 'email verification system',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['C', 'Middleware', 'Auth'],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    // {
    //     image: traceroute,
    //     title: 'thread',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['C', 'Operation System', 'Thread'],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    // {
    //     image: traceroute,
    //     title: 'small shell',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['C', 'Operation System',],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    // {
    //     image: traceroute,
    //     title: 'tree',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['C', 'Operation System',],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    // {
    //     image: traceroute,
    //     title: 'base 64',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['C', 'Operation System',],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    // {
    //     image: traceroute,
    //     title: 'remote procedural call',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['Python', 'Networking',],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    // {
    //     image: traceroute,
    //     title: 'reliable data transfer',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['Python', 'Networking',],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    {
        image: traceroute,
        title: 'traceroute',
        description:
            'A tool for tracking the path of network packets and measuring latency across each hop.',
        tags: ['Python', 'Networking', 'ICMP'],
        githubUrl: 'https://github.com/tkwonn/traceroute',
        appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    },
    {
        image: ping,
        title: 'ping',
        description:
            'A tool for sending echo requests to test network connectivity and measure response times.',
        tags: ['Python', 'Networking', 'ICMP'],
        githubUrl: 'https://github.com/tkwonn/ping',
        appUrl: 'https://asciinema.org/a/jl8X363T1zhI2xUc6i9NBKKLS',
    },
] as const;
