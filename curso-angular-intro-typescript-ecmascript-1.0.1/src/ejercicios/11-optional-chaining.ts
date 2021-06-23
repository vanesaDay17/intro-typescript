import { createSolutionBuilderWithWatchHost } from "typescript";

/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    mascotas?: string []
}

const pasajero1: Pasajero = {
    nombre: "Vanesa"

}

const pasajero2: Pasajero = {
    nombre: "Alejandro",
    mascotas: ["Daysy","Spam","Kriko"]
}

function imprimirMascotas(pasajero:Pasajero) : void {
    const cuantasMascotas = pasajero.mascotas.length || 0;

    console.log(cuantasMascotas);
}

imprimirMascotas (pasajero2);

