// Estructura de datos: Arreglo global para almacenar los objetos de los empleados
let empleados = [];

// Función para registrar un nuevo empleado
function registrarEmpleado() {
    console.log("\n===== REGISTRAR NUEVO EMPLEADO =====");
    
    let id = prompt("Ingrese la identificación del empleado:");
    let nombre = prompt("Ingrese el nombre completo:");
    let cargo = prompt("Ingrese el cargo:");
    let salario = parseFloat(prompt("Ingrese el salario:"));
    let area = prompt("Ingrese el área de trabajo (Administración, Tecnología, etc.):");

    // Validar que no se ingresen datos vacíos
    if (!id || !nombre || !cargo || isNaN(salario) || !area) {
        console.log("Error: Todos los campos son obligatorios y el salario debe ser un número.\n");
        return;
    }

    // Crear el objeto empleado
    let nuevoEmpleado = {
        id: id,
        nombre: nombre,
        cargo: cargo,
        salario: salario,
        area: area
    };

    // Agregar al arreglo
    empleados.push(nuevoEmpleado);
    console.log(`Empleado ${nombre} registrado con éxito.\n`);
}

// Función para listar empleados (Basada en tu idea original)
function listarEmpleados() {
    console.log("\n===== LISTADO DE EMPLEADOS =====");

    if (empleados.length === 0) {
        console.log("No hay empleados registrados.\n");
        return;
    }

    for (let empleado of empleados) {
        console.log("-----------------------------------------");
        console.log("ID: ", empleado.id);
        console.log("Nombre: ", empleado.nombre);
        console.log("Cargo: ", empleado.cargo);
        console.log("Salario: $", empleado.salario);
        console.log("Área: ", empleado.area);
    }
    console.log("-----------------------------------------\n");
}

// Función para buscar un empleado por identificación
function buscarEmpleado() {
    console.log("\n===== BUSCAR EMPLEADO =====");
    
    if (empleados.length === 0) {
        console.log("No hay empleados registrados en el sistema.\n");
        return;
    }

    let idBuscar = prompt("Ingrese la identificación del empleado que desea buscar:");
    
    // Buscar el empleado en el arreglo
    let empleadoEncontrado = empleados.find(emp => emp.id === idBuscar);

    if (empleadoEncontrado) {
        console.log("\nEmpleado Encontrado:");
        console.log("-----------------------------------------");
        console.log("ID: ", empleadoEncontrado.id);
        console.log("Nombre: ", empleadoEncontrado.nombre);
        console.log("Cargo: ", empleadoEncontrado.cargo);
        console.log("Salario: $", empleadoEncontrado.salario);
        console.log("Área: ", empleadoEncontrado.area);
        console.log("-----------------------------------------\n");
    } else {
        console.log(`No se encontró ningún empleado con la identificación: ${idBuscar}\n`);
    }
}

// Función para mostrar la cantidad total de empleados
function mostrarTotalEmpleados() {
    console.log("\n===== TOTAL DE PERSONAL =====");
    console.log(`Actualmente hay un total de **${empleados.length}** empleados vinculados a la empresa.\n`);
}

// Menú interactivo principal (Control de la ejecución)
function iniciarMenu() {
    let opcion;
    
    do {
        opcion = prompt(
            "=== SOLUCIONES EMPRESARIALES S.A.S ===\n" +
            "1. Registrar Empleado\n" +
            "2. Listar Todos los Empleados\n" +
            "3. Buscar Empleado por ID\n" +
            "4. Mostrar Total de Empleados\n" +
            "5. Salir\n\n" +
            "Seleccione una opción (1-5):"
        );

        switch (opcion) {
            case "1":
                registrarEmpleado();
                break;
            case "2":
                listarEmpleados();
                break;
            case "3":
                buscarEmpleado();
                break;
            case "4":
                mostrarTotalEmpleados();
                break;
            case "5":
                console.log("Saliendo de la aplicación. ¡Hasta luego!");
                break;
            default:
                console.log("Opción no válida. Por favor, seleccione una opción del 1 al 5.\n");
        }

    } while (opcion !== "5");
}

// Ejecutar la aplicación
iniciarMenu();