import {mapCategoriasToOption} from "./mapCategoriasToOption";

export const mappedProductToEdit = (product: any) => {

    let mappedProduct = {...product};

    mappedProduct.categorias = mapCategoriasToOption(product.categorias);

    mappedProduct.empresa = {value: product.empresaNit.nit, label: product.empresaNit.nit};

    return mappedProduct;
}