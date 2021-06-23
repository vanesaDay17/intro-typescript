/*
    ===== Código de TypeScript =====
*/

function queTiposoy <T>(argumento:T) {
    return argumento;
}  

let soyTipoString = queTiposoy ("Hola mundo");
let soyTipoNumber = queTiposoy (20);
let soyTipoArray = queTiposoy ([1,2,3,4]);
let soyTipoExplisit = queTiposoy<number>(123);