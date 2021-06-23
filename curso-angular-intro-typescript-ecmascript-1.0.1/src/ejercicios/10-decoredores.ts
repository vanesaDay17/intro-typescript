/*
    ===== Código de TypeScript =====
*/
function classDecorador<T extends { new (...args: any[]): {} }>(    
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
        };
    }

@classDecorador
class MiSuperClass {
    public miPropiedad: string = "ABC123";

    imprimir () {
        console.log("Hola mundo")
    }
}

console.log (MiSuperClass);

const miClass =new MiSuperClass();

console.log (miClass.miPropiedad)
