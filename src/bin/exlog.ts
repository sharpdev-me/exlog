#!/usr/bin/env node

import { existsSync, writeFile } from "fs";
import { compile } from "../compiler";
import * as path from "path";

import { Command } from "commander";

const program = new Command();

program
    .option("-o, --output <path>", "sets the output for the compilation. expects a file or - for stdout", "-")
    .option("-d, --dependencyPath [path]", "sets the path for dependency resolution")
    .argument("<input-file>")
    .action(async (inputFile, options) => {
        let file = path.resolve(process.cwd(), inputFile);
        if(!existsSync(file)) return console.error("input-file does not exist");
        let dependencyPath = options.dependencyPath;
        if(!dependencyPath) dependencyPath = path.dirname(file);
        try {
            const compiled = await compile(file, dependencyPath);
            if(options.output == "-") {
                process.stdout.write(compiled);
                return;
            }
            writeFile(path.resolve(process.cwd(), options.output), compiled, () => {

            });
        } catch(e) {
            console.error(e);
        }
    });

program.parseAsync(process.argv);