import { dirname } from "path";
import { fileURLToPath } from "url";
export const getDirname = (meta) => dirname(fileURLToPath(meta.url));
