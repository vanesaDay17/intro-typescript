/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre: string, 
        public direction: string
    ){}
}

class Heroe extends PersonaNormal {
    //alterEgo: string;
    //edad: number;
    //nombreReal: string;
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    )     
    { 
        super( nombreReal, "New York, USA");
    }
}
const ironman = new Heroe("Ironman",23,"Tony");
console.log(ironman);