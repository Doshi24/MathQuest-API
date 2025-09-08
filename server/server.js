import { app } from "./main.js";
import { connectdb } from "./utils/dbconfig.js";


connectdb()
.then(()=>{
      try {
        app.listen(process.env.PORT);
        console.log(`Server started at port  http://localhost/${process.env.PORT}`);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error during database connection:", error);
    }
})