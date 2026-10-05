import {
    HardDrive,
    KeyRound,
    Layers3,
    List,
    PlusCircle,
    Server,
    SquarePen,
    Trash2,
} from 'lucide-react';

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        route: 'apiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        route: 'ssr',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        route: 'offline',
        verb: 'Get',
        description: 'Lista séries salvas no sessionStorage.',
        color: 'purple',
        Icon: HardDrive,
    },
    {
        id: 4,
        method: 'FullStack',
        route: 'fullstack',
        verb: 'Get',
        description: 'Lista séries via API Route - BackEnd Intermediário.',
        color: 'purple',
        Icon: Layers3,
    },
];

export const crud = [
    {
        id: 1,
        method: 'Create',
        route: 'create',
        verb: 'Post',
        description: 'Cria série via modal e API Route',
        color: 'orange',
        Icon: PlusCircle,
    },
    {
        id: 2,
        method: 'Read',
        route: 'read',
        verb: 'Get',
        description: 'Listar séries no SSR e busca pelo id em rota dinâmica.',
        color: 'green',
        Icon: List,
    },
];
