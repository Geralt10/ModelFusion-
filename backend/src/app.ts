import  Express  from "express";
import  useGraph  from "./services/graph.ai.service.js";
const app = Express();

app.use(Express.json());

app.post("/use-graph",async(req,res)=>{
    await useGraph("what is the capital of france")
})

export default app;