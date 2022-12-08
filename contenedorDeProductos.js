import { ContenedorMySql } from "./contenedorMysql.js";
import { clienteSql } from "./clienteSql.js";
import { clienteSql } from "./config";

export const contendorDeProductos = new ContenedorMySql(clienteSql, "productos");


