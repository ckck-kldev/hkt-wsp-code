// fs.readdir -> list of files
// for each file, read the content, show the file size and filename

// similar to the `du` command


import fs from 'fs';
let dirOutput: Array<Object> = [];

const convertBytes = function(bytes: number) {
    const sizes = ["B", "KB", "MB", "GB", "TB"]
    if (bytes == 0) {
      return "n/a"
    }
    const i: number = Math.floor(Math.log(bytes) / Math.log(1024))
    if (i == 0) {
      return bytes + " " + sizes[i]
    }
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
  }

fs.readdir('./', (err, files) => {
    try{
        files.forEach(function (fileName: string, index: number) {
            fs.stat(fileName, (err, stats) => {
                try {
                    const fileSize = stats.size;
                    dirOutput[index] = {size: fileSize};
                    console.log(convertBytes(stats.size))
                } catch(err) {
                    console.log(err);
                }
            })
            console.log(fileName);
        })
    } catch(err) {
        console.log(err);
    }
})

console.log(dirOutput)