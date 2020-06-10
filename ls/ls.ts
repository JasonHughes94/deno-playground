// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import clc from 'https://deno.land/x/color/index.ts';

const directory = Deno.args.length === 0 ? "./" : Deno.args[0];

for await (const dirEntry of Deno.readDir(directory)) {
  console.log(clc.green.text(dirEntry.name));
}