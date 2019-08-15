namespace Clases {

    export class Persona {
        public nombre: string;
        public apellido: string;
        public edad: number;
        public email: string;
        public sexo: string;
        public id: number;
        public cargo: string;

        constructor(nombre: string, apellido: string, edad: number, email: string, sexo: string) {
            this.nombre = nombre;
            this.email = email;
            this.apellido = apellido;
            this.edad = edad;
            this.sexo = sexo;
        }

        public toJSON(): string {
            let json: string = `{"nombre":"${this.nombre}", "apellido":"${this.apellido}", "edad":"${this.edad}", "email":"${this.email}", "sexo":"${this.sexo}", "id":${this.id}, "cargo":"${this.cargo}"}`;
            return json;
        }

    }

    export class Legislador extends Persona {
        public id: number;
        public cargo: string;

        constructor(nombre: string, apellido: string, edad: number, email: string, sexo: string, id: number, cargo: string) {
            this.id = id;
            super(nombre, apellido, edad, email, sexo);
            this.cargo = cargo;
        }


        public toJSON(): string {

            let cad: string = super.toJSON().replace('}', '');
            let json: string = cad + `, "id":${this.id}, "cargo":"${this.cargo}"}`;
            return json;
        }

    }

    export enum tipoCargo {
        Diputado,
        Senador
    }

}