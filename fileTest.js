const fs = require("fs").promises;
const writeDate = async () => {
    try{
       const date = new Date().toLocaleString();
       await fs.appendFile("log.txt",`${date}\n`);
      const readFile = await fs.readFile("log.txt","utf8");
      console.log(readFile);
      
    } catch(e) {
        console.log(e);
        
    }
  
};
writeDate()