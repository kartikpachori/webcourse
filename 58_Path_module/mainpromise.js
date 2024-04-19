import { readFile } from "fs";
import fs from "fs/promises";

let a = await fs.readFile("harry.txt");
console.log(a.toString());
