class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietario() {
        return `El nombre del dueño es ${this.nombre}. El domicilio es: ${this.direccion} y el numero telefonico de contacto es: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad
    }
}

function crearDatosConsulta() {
    const nombre = document.querySelector('#propietario').value
    const telefono = document.querySelector('#telefono').value
    const direccion = document.querySelector('#direccion').value
    const tipo = document.querySelector('#tipo').value
    const nombreMascota = document.querySelector('#nombreMascota').value
    const enfermedad = document.querySelector('#enfermedad').value

    if (tipo === 'perro') {
        const perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        return perro
    } else if (tipo === 'gato') {
        const gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        return gato
    } else if (tipo === 'conejo') {
        const conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        return conejo
    } else {
        return false
    }
}

function imprimirDatos(event) {
    event.preventDefault()
    const datosDeAtencion = crearDatosConsulta()
    if (datosDeAtencion) {
        const selectorDeLista = document.querySelector('#resultado > ul')
        selectorDeLista.innerHTML = `<li>${datosDeAtencion.datosPropietario()}</li> <li>${datosDeAtencion.tipo}, mientras que el nombre de la mascota es: ${datosDeAtencion.nombreMascota} y la enfermedad es: ${datosDeAtencion.enfermedad}.</li>`
    }
}

const selectorAgregar = document.querySelector('#agregar')
selectorAgregar.addEventListener('click', imprimirDatos)
