/*
    ===== Código de TypeScript =====
*/
function sumar1(a:number,b:number): number{

    return a+b;
}

const sumarFlecha1 = (a:number, b:number) => {

    return a+b;
}

function muntiplicar1 (numero:number, otroNumero?:number, base:number = 2): number{

return numero*base;

}
const resultado = muntiplicar1 (5,9)

console.log(resultado);



interface PersonaLR1 {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}


function aumento1 (persona1: PersonaLR1, aumentoX: number): void {

    persona1.pv += aumentoX;

    console.log (persona1);
}

const nuevoPersona1: PersonaLR1 = {
    nombre : "Vane",
    pv: 50,
    mostrarHp() {
        console.log("Total sueldo", this.pv);
    }
}

aumento1 (nuevoPersona1, 30);

nuevoPersona1.mostrarHp();