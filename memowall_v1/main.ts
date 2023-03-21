import express, { Request, Response } from "express";
import { print } from "listening-on";
import session from "express-session";
import setting from "./setting.json";
import path from "path";
import jsonfile from "jsonfile";
import fs from "fs/promises";
import { timeStamp } from "console";
// import formidable from 'formidable'

type Memo = {
  id: number;
  content?: string;
  publishTime: number;
  comments: string[];
};

async function loadMemos(): Promise<Memo[]> {
  let files = await fs.readdir(".");
  if (files.includes("memos.json")) {
    let json = await jsonfile.readFile("memos.json");
    return json;
  }
  return [];
}

const app = express();

declare module "express-session" {
  interface SessionData {
    counter: number;
  }
}

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "setting.sessionSecret",
  })
);

app.use((req,res,next) => {
  if (req.url.endsWith(".html") || req.url.endsWith('/')) {
  let counter = req.session.counter || 0;
  counter++;
  req.session.counter = counter;
  req.session.save();
  }
  next();
})

app.use((req, res, next) => {
  console.log(timeStamp ,req.method, req.url, req.session.counter)
})

app.get('/counter.js', (req, res) => {
  res.end('let counter = ' + req.session.counter)
})


app.use(express.static("public"));

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.resolve("public", "404.html"));
});

let port = 8800;
app.listen(port, () => {
  print(port);
});
