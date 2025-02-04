import { Project } from '@/type';
import base64 from '../../public/assets/img/base64.png';
import ping from '../../public/assets/img/ping.png';
import rpc from '../../public/assets/img/rpc.png';
import smallsh from '../../public/assets/img/smallsh.png';
import traceroute from '../../public/assets/img/traceroute.png';
import tree from '../../public/assets/img/tree.png';

export const projects = [
    // {
    //     image: traceroute,
    //     title: 'thread',
    //     description:
    //         'A tool for tracking the path of network packets and measuring latency across each hop.',
    //     tags: ['C', 'Thread'],
    //     githubUrl: 'https://github.com/tkwonn/traceroute',
    //     appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    // },
    {
        image: smallsh,
        title: 'small shell',
        description:
            'A lightweight shell implementation in C that implements a subset of features of bash.',
        tags: ['C', 'Makefile', 'Process'],
        githubUrl: 'https://github.com/tkwonn/smallsh',
        appUrl: 'https://asciinema.org/a/5u1pndjgIQ0e1CbZdyldZPLrP',
    },
    {
        image: tree,
        title: 'tree',
        description:
            'A command-line tool similar to the GNU tree utility, displaying directory structures in a tree-like format.',
        tags: ['C', 'Makefile', 'File I/O'],
        githubUrl: 'https://github.com/tkwonn/tree',
        appUrl: 'https://asciinema.org/a/4NXUfSTGgVhEAULL0s0thOAiA',
    },
    {
        image: traceroute,
        title: 'traceroute',
        description:
            'A tool for tracking a path of network packets and measuring latency across each hop.',
        tags: ['Python', 'Socket', 'ICMP'],
        githubUrl: 'https://github.com/tkwonn/traceroute',
        appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
    },
    {
        image: ping,
        title: 'ping',
        description:
            'A tool for sending echo requests to test network connectivity and measure response times.',
        tags: ['Python', 'Socket', 'ICMP'],
        githubUrl: 'https://github.com/tkwonn/ping',
        appUrl: 'https://asciinema.org/a/jl8X363T1zhI2xUc6i9NBKKLS',
    },
    {
        image: rpc,
        title: 'remote procedure call',
        description:
            'A local RPC system that enables processes to call procedures on other process through Unix domain sockets.',
        tags: ['Python', 'JavaScript', 'Socket'],
        githubUrl: 'https://github.com/tkwonn/remote-procedure-call',
        appUrl: 'https://asciinema.org/a/P71AG0MTjQ3LIj7oJfv55jJvq',
    },
    {
        image: base64,
        title: 'base64',
        description:
            'A base64 encoder/decoder that enables safe transmission of binary data through text-based protocols.',
        tags: ['C', 'Makefile', 'File I/O'],
        githubUrl: 'https://github.com/tkwonn/base64',
        appUrl: 'https://asciinema.org/a/rdYjEroQStpuiQc9iiFbx5tI0',
    },
] as const satisfies Project[];
