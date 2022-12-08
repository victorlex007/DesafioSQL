export class ContenedorMySql {
    constructor(clienteMySql, table){
        this.cliente = clienteMySql
        this.table = table;
    }
    async guardar(cosa){
        await this.cliente(this.table).insertar(cosa);
    }
    async recuperar(){
        return await this.cliente(this.table).select();
        }
    }
