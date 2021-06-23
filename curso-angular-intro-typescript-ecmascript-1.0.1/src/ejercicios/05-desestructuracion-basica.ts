/*
    ===== Código de TypeScript =====
*/
interface Reportuctor {

    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number
}


const reproductor: Reportuctor = {
    volumen: 50,
    segundo: 30,
    cancion: "Febrero Azul",
    detalles: {
        autor: "Samantha Barron",
        anio: 2021
    }

}

const{volumen, segundo, cancion, detalles} = reproductor;
const{autor, anio} = detalles;


//console.log("El volumen de la cancion acutal es", volumen);
//console.log("El segundo de la cancion acutal es", segundo);
//console.log("El cancion de la cancion acutal es", cancion);
//console.log("El autor de la cancion es", autor);

const mascotas: string[] = ["Bicho", "Kriko", "Daysi"];
const [pos0, pos1, pos2]= mascotas;

console.log("Gato:", pos0);
console.log("Huron 1:",pos1);
console.log("Huron 2:", pos2);



