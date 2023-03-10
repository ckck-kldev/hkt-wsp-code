import * as express from 'express'
import fs from 'fs'


let test = fs.readFileSync('package.json')

console.log(test);
