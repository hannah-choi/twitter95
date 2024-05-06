export interface Tweet {
    id: number;
    text: string;
    created: string;
    nickname: string;
    userid: string;
    url?: string;
}

export interface User {
    userid: string;
    nickname: string;
    email: string;
    password: string;
    bio?: string;
    avatar?: string;
    bg?: string;
    token: undefined | string;
}
