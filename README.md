# Deno playground
Basic playground for messing around with Deno and what it can do

## Notes before use
At the time of making this the deno plugin will not work in VsCode without the following steps

- Install the deno plugin [VsCode deno](https://github.com/denoland/vscode_deno)
- Install the latest version of typescript `npm i -g typescript` and ensure it's version 3.9.2 or greater
- Update your global `settings.json` and add the following   `"typescript.tsdk": "C:\\Users\\<Your Username>\\AppData\\Roaming\\npm\\node_modules\\typescript\\lib"`
- Go to any `.ts` file and ensure that at the bottom right typescript version is set to the npm version

## Current playground apps

- Basic hello-world server example using [the deno std](https://github.com/denoland/deno/tree/master/std) lib.
- Basic ls command that will either ls the current directory or a supplied directory using [color](https://github.com/maheshkareeya/color/tree/master) for console colours
- Basic markdown creator (WIP)

## How to run

- If running hello-world-server then press `F5` in VsCode
- Any other project `deno run -A ./folder/file.ts`

## Running tests

The markdown project has a number of tests that you can run using `deno test .\create-markdown-file\markdown_tests.ts`