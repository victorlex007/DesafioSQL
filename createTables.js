import { clienteSql as knex } from './clienteSql.js'

knex.schema.hasTable('personas')
    .then(exists => {
        if (!exists) {
            knex.schema.createTable('personas', table => {
                table.string('id'),
                    table.string('nombre'),
                    table.integer('price')
            })
                .then(() => {
                    console.log('tabla "personas" creada!')
                })
        } else {
            console.log('la tabla "personas" ya existe. no se realizaron cambios')
        }
    })
    .finally(() => {
        knex.destroy()
    })