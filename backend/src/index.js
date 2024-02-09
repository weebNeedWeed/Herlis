import express from "express";
import "dotenv/config";
import router from "./express/routes";
import cors from "cors";

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())   
app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
