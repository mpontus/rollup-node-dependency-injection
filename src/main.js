import * as path from "path";
import {
  ContainerBuilder,
  Definition,
  YamlFileLoader,
} from "node-dependency-injection";
import { Mailer } from "./Mailer";

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
loader.load(path.join(__dirname, "services.yaml"));

export { container };
