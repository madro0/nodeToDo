const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};
const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca una tarea pendiente como realizada'
};

const argv = require('yargs')
    .command('crear', 'Crear un por hacer', {

        descripcion

    }).command('actualizar', 'Actualiza el estado completado de una tarea', {

        descripcion,
        completado

    }).command('borrar', 'borrar una tarea', {

        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}