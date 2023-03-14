import pfs from 'fs/promises'

async function listAllJs(targetPath: string){
    // Your code
    try {
        let files = await pfs.readdir(targetPath)
            files.forEach(file => {
                if (file.endsWith('.ts')){
                    console.log(`${targetPath}/${file}`)
                }
            });
    } catch(err) {
        console.log(err);
    }
    
    
}

listAllJs("/Users/kl/VSCode_local/tecky_lesson/hk-map-25-feb-23-kb-exercises/WSP/WSP003/lecture");

/* 
It should print something like:

/Users/alex/Documents/tecky-exercises/main.js
/Users/alex/Documents/tecky-exercises/001.js
...

*/