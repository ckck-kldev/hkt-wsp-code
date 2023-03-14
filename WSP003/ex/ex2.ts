import pfs from 'fs/promises'


async function listAllJsRecursive(targetPath: string){
    // Your code
    try {
        let files = await pfs.readdir(targetPath)

            files.forEach(async file => {
                let fileStat = await pfs.stat(file)
                if (fileStat.isDirectory()) {
                    await listAllJsRecursive(file);
                }
                if (file.endsWith('.ts')){
                    console.log(`${targetPath}/${file}`);
                }
            });
    } catch(err) {
        console.log(err);
    }
    
    
}

listAllJsRecursive("/Users/kl/VSCode_local/tecky_lesson/hk-map-25-feb-23-kb-exercises/WSP/WSP003/lecture");


