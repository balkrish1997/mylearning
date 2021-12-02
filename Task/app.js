const { clear } = require("console");
const fs=require("fs");
const path=require("path");
 if(!fs.existsSync("tempfolder1"))
 {
  fs.mkdirSync("tempfolder1")
  fs.appendFile(path.resolve("tempfolder1","testdata.txt"),"test data",(err)=>
  {
   if(err)
   {
       console.log(err);
   }
   console.log("file created successfully");
  })
 }
 else
 {

    fs.appendFile(path.resolve("tempfolder","testdata.txt"),"new data",(err)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("file created");
        }

    })
 }
