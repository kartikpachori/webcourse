import path from "path";
let mypath = "E:\\Comp_Web_course\\webcourse\\58_Path_module\\harry.txt";

console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.basename(mypath));

console.log(path.join("c:/", "programs\\harry.txt"));