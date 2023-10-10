import { Command } from "commander";

const program = new Command();

program
  .option("-p <port>", "port", 8080 || process.env.PORT)
  .option("--persistence <persistence>", "persistence", "MONGO")
  .option("--mode <mode>", "mode", "dev");

program.parse();

export default program.opts();
