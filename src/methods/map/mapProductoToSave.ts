import {Producto} from "../../models/Producto";

export function mapProductoToSave(producto: Producto) {

    let mappedProducto = {...producto};

    mappedProducto.categorias = mappedProducto.categorias.map((categoria: any) => {
        return categoria.value;
    });

    if (mappedProducto.empresa && mappedProducto.empresa.value) {
        mappedProducto.empresa = mappedProducto.empresa.value;
    } else {
        mappedProducto.empresa = null;
    }

    return mappedProducto;
}