import tasksRouter from './tasks-router.js';


export default (app)=>{
    app.use('/',tasksRouter);
}