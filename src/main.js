import { ContainerBuilder } from "node-dependency-injection";
import { Mailer } from "./Mailer";

const container = new ContainerBuilder();
container.register("mailer", Mailer, ["sendmail"]);

export { container };
