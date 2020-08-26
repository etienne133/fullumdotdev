import express from 'express'
import cookieParser from 'cookie-parser';

const app = express()
const port = process.env.PORT || 3000;

async function main() {
    try {
    //Client.connect;
  
      app.get("/", (req, res) => res.send("gti619 backend"));
      app.use(cookieParser());
      app.use((req, res, next) => {
        // res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
      });

      //app.use("/v1/", router);

      app.listen(port, () => {
        console.log(`Server is running in http://localhost:${port}`);
      });

    } 
    catch (e) 
    {
      console.error(e);
    } 
    finally 
    {
      //close db connection here 
    }
  }
  main().catch(console.error);