import * as tasksService from '../services/tasks-service.js';

//ERROR HANDLING

//FOR ERRORS
const setErrorResponse = (error,response) =>{
    response.status(500);
    response.json(error);
}
//SUCCESS RESPONSE
const setSuccessResponse = (obj, response) =>{
    response.status(200);
    response.json(obj);
}

//CREATE
export const post = async(request, response) =>{
    //USING TRY CATCH BLOCK AND ASYNC 
    try{
        const payload = request.body;
        const task = await tasksService.save(payload);
        setSuccessResponse(task,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//GET
export const index= async(request,response)=>{
    try{
        const title = request.query.title;
        //const desc = request.params.taskDescription;
        const query= {};
        //TITLE AND QUERY MATCHES
        if(title){
            query.title = title;
        }

        const task = await tasksService.search(query);
        setSuccessResponse(task,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//GET BY ID
    export const get = async(request,response)=>{
    try{
        const id = request.params.id;
        const task = await tasksService.get(id);
        setSuccessResponse(task,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//UPDATE
export const update = async(request,response)=>{
    try{
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const task = await tasksService.update(updated);
        setSuccessResponse(task,response);
    }catch(error){
        setErrorResponse(error,response);
    }  
}

//DELETE
export const remove = async(request,response)=>{
    try{
        const id = request.params.id;
        const task = await tasksService.remove(id);
        setSuccessResponse({message:`Successfully Removed ${id}`},response);
    }catch(error){
        setErrorResponse(error,response);
    }
}