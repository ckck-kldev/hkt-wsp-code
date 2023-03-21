import express, { Request, Response } from 'express'
import { print } from 'listening-on'
import path from 'path';
import jsonfile from 'jsonfile'
import fs from 'fs/promises'
// import formidable from 'formidable'

type Memo = {
    id: number
    content?: string
    publishTime: number
    comments: string[]
  }

  async function loadMemos(): Promise<Memo[]> {
    let files = await fs.readdir('.')
    if (files.includes('memos.json')) {
      let json = await jsonfile.readFile('memos.json')
      return json
    }
    return []
  }

let app = express();

// app.get('/memos', (res,req) => {
//     res.json
// })

app.use(express.static('public'))

app.use((req, res) => {
    res.status(404)
    res.sendFile(path.resolve('public', '404.html'))
})




let port = 8800
app.listen(port, () => {
    print(port)
})

