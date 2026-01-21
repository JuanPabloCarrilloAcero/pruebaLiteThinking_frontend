export function mapCategoriasToOption(categorias: any[]): any[] {
    return categorias.map((categoria) => ({
        value: categoria.id,
        label: categoria.nombre,
    }));
}