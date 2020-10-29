const fs = require('fs');

let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        return console.log('The file has been saved!');
    });
};
const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


};
const crear = (descripcion) => {
    cargarDb();


    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};
const getListado = () => {
    cargarDb();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};
const borrar = (descripcion) => {
    cargarDb();
    let index2 = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index2 >= 0) {
        listadoPorHacer.splice(index2, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }


};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};