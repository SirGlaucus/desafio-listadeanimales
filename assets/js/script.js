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
// ----------------------- Creacion de clases finalizada -----------------------

const crearDatosConsulta = () => {
    const nombre = document.querySelector('#propietario').value
    const telefono = document.querySelector('#telefono').value
    const direccion = document.querySelector('#direccion').value
    const tipo = document.querySelector('#tipo').value
    const nombreMascota = document.querySelector('#nombreMascota').value
    const enfermedad = document.querySelector('#enfermedad').value

    // Asignacion de variables para luego crear el objeto

    if (tipo === 'perro') {
        const perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio 
        return perro
    } else if (tipo === 'gato') {
        const gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio 
        return gato
    } else if (tipo === 'conejo') {
        const conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio 
        return conejo
    } else {
        return false
    }

    // Realmente solo lo usamos para instanciar el objeto con un nombre en especifico, sin embargo podria ser resumido en una sola linea y generaria el mismo resultado
}

const limpiezaDeLabels = () => {
    document.querySelector('#propietario').value = ""
    document.querySelector('#telefono').value = ""
    document.querySelector('#direccion').value = ""
    document.querySelector('#nombreMascota').value = ""
    document.querySelector('#enfermedad').value = ""
}

const imprimirDatos = event => {
    event.preventDefault()
    const datosDeAtencion = crearDatosConsulta() // Ejecutamos la funcion para asignar el objeto a una nueva variable
    if (datosDeAtencion) {
        const selectorDeLista = document.querySelector('#resultado > ul')
        selectorDeLista.innerHTML = `<li>${datosDeAtencion.datosPropietario()}</li> <li>${datosDeAtencion.tipo}, mientras que el nombre de la mascota es: ${datosDeAtencion.nombreMascota} y la enfermedad es: ${datosDeAtencion.enfermedad}.</li>`
        limpiezaDeLabels()
    }
}

// ----------------------- Funciones finalizadas -----------------------

const selectorAgregar = document.querySelector('#formulario')
selectorAgregar.addEventListener('submit', imprimirDatos)

// ----------------------- Agregamos el evento submit al boton y comenzamos a ejecutar las funciones -----------------------