import {sql} from '../utils/dbconfig.js'

const store_name_to_db = async (req, res) =>{
 let name = req.body; 
    console.log("name form frontend", name.name)
    let nameValue = name.name;
    let Qsql = await sql("insert into dummynames (name) values ('"+name.name+"' )") 
    // res.status(200).json({ message: "new name added", result : Qsql } );
    res.status(200).json({ message: "New name added", name: nameValue, result: Qsql });

}

export default store_name_to_db