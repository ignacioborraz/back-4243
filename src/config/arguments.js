import { Command } from "commander";

const program = new Command(); //inicializamos los comandos

program
  .option("-p <port>", "port", 8080)
  .option("--mode <mode>", "environment", "development");

program.parse(); //para cerrar la configuración de comandos

export default program.opts();
