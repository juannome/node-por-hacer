//
//
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea por hacer'
};
const completado = {
    defaukt: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear por hacer', {
        descripcion
    })
    .command('actualizar', 'mostrar lista por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};