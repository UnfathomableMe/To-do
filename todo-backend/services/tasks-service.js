import Task from '../models/tasks.js';
//import taskController from '../controller/task-controller.js';

//CREATE
//create the new todo item.
export const save = (newTask)=>{
    const task = new Task(newTask);
    //const promise = taskModel.save();

    task.createdDate= new Date();
   task.lastModifiedDate= new Date();
    return task.save();
}

//GET 
//search for item by id
export const search = (query) =>{
    const params = {...query};
    return Task.find(params).exec();
}

//GET BY ID
export const get = (id)=>{
    const task = Task.findById(id).exec();
    return task;
}

//UPDATE
// Updates an existing todo item by id
export const update = (updatedTask) =>{
    updatedTask.lastModifiedDate = new Date();
    const task = Task.findByIdAndUpdate(updatedTask.id, updatedTask, {new:true}).exec();
    return task;
}

//DELETE
//Deletes an item by id
export const remove = (id) =>{
    const task = Task.findByIdAndDelete(id).exec();
    return task;
}