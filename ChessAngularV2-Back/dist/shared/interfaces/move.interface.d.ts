export interface IMove {
    id: number;
    name: string;
    description: string;
    url: string;
}
export declare class Move {
    id: number;
    name: string;
    description: string;
    url: string;
    constructor(id: number, name: string, description: string, url: string);
}
