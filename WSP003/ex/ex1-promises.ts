import pfs from 'fs'

function listAllJs(targetPath: string){
    // Your code
    pfs.promises
    .readdir(targetPath)
    .then(files => {
        for (let file of files) {
            if (file.endsWith('.ts')) {
            console.log(`${targetPath}/${file}`);
            }
    }})
    .catch(err => {console.error(err)});
}
    


listAllJs("/Users/kl/VSCode_local/tecky_lesson/hk-map-25-feb-23-kb-exercises/WSP/WSP003/lecture");

/* 
It should print something like:

/Users/alex/Documents/tecky-exercises/main.js
/Users/alex/Documents/tecky-exercises/001.js
...

*/