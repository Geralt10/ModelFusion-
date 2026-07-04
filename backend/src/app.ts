import  Express  from "express";
import  useGraph  from "./services/graph.ai.service.js";
const app = Express();

app.use(Express.json());

app.post("/use-graph",async(req,res)=>{
    const result =await useGraph("write a code for factorial function in js");
    res.json(result)
})

export default app;