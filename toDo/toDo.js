const fs = require('fs');




let listadoPorHacer = [];

const guardarDB = () => {

    return new Promise((resolve, rejects) => {
        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile('./DB/data.json', data, (err) => {
            if (err)
                rejects('no se pudo almacenar en base de datos', err)
            else
                resolve('DB almacenada correctamente');
        });
    })
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../DB/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        do: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB().catch(err => console.log(err));
    return porHacer;
}

const borrar = (descripcion) => {

    let index = encontrarIndex(descripcion);
    console.log(index);
    let n = listadoPorHacer.length;

    listadoPorHacer.splice(index);

    if (n === listadoPorHacer.length) {
        return false;
    } else {

        guardarDB();
        return true;
    }
}

const actualizar = (descripcion, completado = true) => {

    let index = encontrarIndex(descripcion);

    if (index >= 0) {
        listadoPorHacer[index].do = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const encontrarIndex = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    return index;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}