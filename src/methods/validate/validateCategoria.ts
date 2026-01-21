import {isStringEmpty} from "../../utils/isStringEmpty";
import {Categoria} from "../../models/Categoria";

export function validateCategoria (categoria: Categoria): { isValid: boolean, errors: string[] } {
    let isValid: boolean = true;
    let errors: string[] = [];

    if (isStringEmpty(categoria.nombre)) {
        errors.push('Ingresa un nombre');
        isValid = false;
    }

    return {isValid: isValid, errors: errors};
}