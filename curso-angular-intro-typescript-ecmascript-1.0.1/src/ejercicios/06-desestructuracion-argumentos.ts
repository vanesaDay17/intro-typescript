/*
    ===== Código de TypeScript =====
*/

export interface Producto {
     descripcion: string;
     precio: number;
}

const Chocolate: Producto ={
    descripcion:"Kinder Delice",
    precio: 15
}

const paleta: Producto ={
    descripcion: "Magnum",
    precio: 29
}

export function calculaISV (productos:Producto[]): [number, number]{
    let total= 0;
    productos.forEach( ({precio}) => {
        total += precio
    })
    return [total, total* 0.15];
}

const articulos = [ Chocolate, paleta]

const [total, isv] = calculaISV(articulos);

console.log("Total:", total);
console.log("ISV:", isv);