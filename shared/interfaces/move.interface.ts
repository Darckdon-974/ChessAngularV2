export interface IMove {
    id: number;
    name: string;
    description: string;
    url: string;
}

export class Move {
    id: number;
    name: string;
    description: string;
    url: string;

    constructor(id: number, name: string, description: string, url: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
    }
}