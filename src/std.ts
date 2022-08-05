import * as fs from "fs";
import path from "path";

let setup = false;

const std: {[key: string]: string} = {};

function doSetup() {
    let files = fs.readdirSync(path.resolve(__dirname, "std"), {encoding: "utf-8"});
    for(let file of files) {
        let name = file.split(".")[0];

        std[name] = fs.readFileSync(path.resolve(__dirname, "std", file), {encoding: "utf-8"});
    }
}

export function get(importName: string): string {
    if(!setup) doSetup();
    return std[importName];
}