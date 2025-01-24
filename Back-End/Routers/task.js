const express = require("express");
const Taskschema = require("../Schema/task")
const Router = express.Router();
Router.get("/", async (req, resp) => {

    try {
        const getAllTask = await Taskschema.find();
        console.log(getAllTask);
        resp.status(200).json(getAllTask)
    }
    catch (err) {
        resp.status(500).json("Error while fetchong item");
    }
})

Router.post('/', async (req, res) => {
    console.log(req.body)

    const { title, description } = req.body;

    const newItem = new Taskschema({ title, description });
    try {
        await newItem.save();

        res.status(201).send(newItem);
    } catch (err) {
        res.status(400).send('Error creating item');
    }
});


Router.put("/:id", async (req, res) => {
    const { title, description } = req.body;
  
    try {
      const updatedTask = await Taskschema.findByIdAndUpdate(
        req.params.id,  
        { title, description },  
        { new: true, runValidators: true } 
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
     
      res.status(200).json(updatedTask);
    } 
    catch (err) {
      
      res.status(400).json({ message: 'Error updating task', error: err.message });
    }
  });
  Router.delete("/:id",async(req,res)=>{
      const deleteid=req.params.id;
      try{
      const deletedTask = await Taskschema.findByIdAndDelete(deleteid);
      if(!deletedTask)
      {
        res.status(404).json({ message: 'id not found' });
      }
      res.status(200).json(deletedTask);

      }catch(err)
      {
        res.status(400).json({message:"error deleting task",error:err.message})
      }


  })
  


module.exports = Router;