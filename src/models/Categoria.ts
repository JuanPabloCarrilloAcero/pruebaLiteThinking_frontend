export interface Categoria {
    id: any;
    nombre: string;
}

export function createNewEmptyCategoriaObject(): Categoria {
    return {
        id: "",
        nombre: ""
    };
}