import express from 'express'
import { print } from 'listening-on'
import session from 'express-session'

import { Request, Response } from 'express'
import path from 'path'


const app = express();

app.use(express.static("public"));



// app.get("/", function (req: Request, res: Response) {
//   res.end("Hello World");
// });

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});