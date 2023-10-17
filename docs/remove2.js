const fs = require('fs');
const path = require('path');


// Specify the directory to delete subdirectories from
const directoryToDelete = '/mnt/gearbox_storage/storage/files/';

fs.readdirSync(directoryToDelete).forEach((file) => {
    const curPath = path.join(directoryToDelete, file);

    if (fs.lstatSync(curPath).isDirectory()) {
        // Recursively delete subdirectories
        deleteFolderRecursive(curPath);
    }
    else{
        if(curPath.endsWith("data.gz")){
            console.log(curPath);
            // fs.unlinkSync(curPath);
        }
    }
});


