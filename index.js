// Importando paquetes varios
import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import _ from "lodash";
import axios from "axios";

// Generar un identificador único
  uuidv4()

// Generando la fecha de registro
moment().format("MMMM Do YYYY, h:mm:ss a");

// Arreglo de números
const numeros = [1, 2, 3, 4, 5, 6];

//Método partition para mostrar números pares e impares por separado
console.log(_.partition(numeros, (n) => n % 2));

// Instancia axios
// Datos de los usuarios consultados desde la API Random User
axios
  .get("https://randomuser.me/api/?results=12")
  .then((response) => {
    response.data.results.forEach((element) => {
      const usuarios = (`Nombre: ${element.name.first} - Apellido: ${element.name.last} - ID: ${uuidv4().slice(30)} - Timestamp: ${moment()}`);
      console.log(
        // Mostrar los datos por consola en color azul y fondo blanco
        chalk.blue.bgWhite.bold(usuarios)
      );
    });
  })
  .catch((e) => {
  console.log(e);
  });