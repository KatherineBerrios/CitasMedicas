// Importando paquetes varios
import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import _ from "lodash";
import axios from "axios";

// Arreglo de usuarios
const usuarios = [];

// Generando un identificador único
  uuidv4();

// Generando la fecha de registro
moment().format("MMMM Do YYYY, h:mm:ss a");

// Instancia axios
// Datos de los usuarios consultados desde la API Random User
axios
  .get("https://randomuser.me/api/?results=12")
  .then((response) => {
    response.data.results.forEach((element) => {
      const name = element.name.first;
      const surname = element.name.last;
      const id = element.login.uuid.slice(30);
      const timestamp = element.registered.date;
      const gender = element.gender;
      const usuario = {"Nombre": name, "Apellido": surname, "ID": id, "Timestamp": timestamp, "Genero": gender};

      usuarios.push(usuario);
      });

      console.log(
        // Mostrar los datos por consola en color azul y fondo blanco
        chalk.blue.bgWhite.bold(
          JSON.stringify(
            //Método partition para mostrar usuarios de género masculino y fememnino por separado
            _.partition(usuarios, ["Genero", "female"])
          )
        )
      );

    })
  .catch((e) => {
  console.log(e);
  });