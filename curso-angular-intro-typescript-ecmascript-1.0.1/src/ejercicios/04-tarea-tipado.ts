/*
    ===== Código de TypeScript =====
*/

interface employeT {
    name:string;
    age: number;
    direction : Direction,
    showDirection: () => string;
}

interface Direction {
    street: string;
    country: string;
    city: string;
}

const employe: employeT = {
    name: "Vanesa",
    age: 26,
    direction: {
        street: "Jazmin",
        country: "Mexico",
        city: "Edo. Mexico"
    },

    showDirection () {
        return this.name + ", " + this.direction.street + ", " + this.direction.country;
    }
}

const direction = employe.showDirection();
console.log (direction);
