// Importando paquetes varios
import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import _ from "lodash";
import axios from "axios";

// Arreglo de usuarios
const usuarios = [];

// Comando para generar una fecha de registro con la fecha actual
// moment().format("MMMM Do YYYY, h:mm:ss a");

// Instancia axios
// Datos de los usuarios consultados desde la API Random User
axios
  .get("https://randomuser.me/api/?results=12")
  .then((response) => {
    response.data.results.forEach((element) => {
      const name = element.name.first;
      const surname = element.name.last;

      // Genera un identificador único aleatorio que muestra los últimos 6 dígitos
      const id = uuidv4().slice(30); // Si se quiere usar el uuid proporcionado por la API, utilizar element.login.uuid.slice(30)
      // Formateando la fecha de registro en la API
      const timestamp = moment(element.registered.date).format("MMMM Do YYYY, h:mm:ss a");
      const gender = element.gender;

      const usuario = {Nombre: name, Apellido: surname, ID: id, Timestamp: timestamp, Genero: gender,};

      usuarios.push(usuario);
    });

      console.log(
        // Mostrar los datos por consola en color azul y fondo blanco
        chalk.blue.bgWhite.bold(
          JSON.stringify(
            //Método partition para mostrar usuarios de género masculino y fememnino en arreglos por separado
            _.partition(usuarios, ["Genero", "female"])
          )
        )
      );

    })
  .catch((e) => {
  console.log(e);
  });