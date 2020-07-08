const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./toDo/toDo');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('===========To Do========'.green);
            console.log(`${tarea.descripcion}`.blue);
            let stateDo = '';
            if (tarea.do)
                stateDo = `${tarea.do}`.green;
            else
                stateDo = `${tarea.do}`.red;
            console.log(`Estado: ${stateDo}`);
            console.log('========================'.green);
        }
        break;

    default:
        console.log('comando no reconocido');
}