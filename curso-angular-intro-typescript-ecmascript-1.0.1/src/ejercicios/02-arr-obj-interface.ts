/*
    ===== Código de TypeScript =====
*/

let habilidades: string [] = ["bash","counter","healding"];

interface Personaje {
    nombre:string;
    hp:number;
    habilidades:string [];
    puebloNatal?: string;
}

const personaje : Personaje =
{
     nombre: "Day",
     hp: 100,
     habilidades: ["bash","counter","healding"],
     puebloNatal: "Pueblo Paleta"

}

console.table (personaje);