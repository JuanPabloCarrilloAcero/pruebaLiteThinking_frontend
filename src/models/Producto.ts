export interface Producto {
    codigo: string;
    nombre: string;
    categorias: any;
    moneda: string;
    precio: string;
    empresa: any;
}

export function createNewEmptyProductoObject(): Producto {
    return {
        codigo: "",
        nombre: "",
        categorias: [],
        moneda: "",
        precio: "",
        empresa: null
    };
}