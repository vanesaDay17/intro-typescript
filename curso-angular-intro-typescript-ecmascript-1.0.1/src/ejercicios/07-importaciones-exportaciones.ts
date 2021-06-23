/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-argumentos";


const carritoCompras: Producto [] = [
    { 
        descripcion: "Telefono 1",
        precio: 243

    },
    { 
        descripcion: "Telefono 2",
        precio: 300

    }
]


const [Total, ISV] = calculaISV (carritoCompras);
console.log("Total", Total);
console.log("ISV", ISV);