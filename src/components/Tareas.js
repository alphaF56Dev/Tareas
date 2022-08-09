//import { Dropdown, Button, Grid, Input, Header, Icon } from "semantic-ui-react";

import { Grid, Input, Button, Header, Icon, Dropdown } from "semantic-ui-react";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

const options = [
    {key: "casa", text:"Casa", value:"casa"},
    {key: "deportes", text:"Deportes", value:"deportes"},
    {key: "trabajo", text:"Trabajo", value:"trabajo"},
    {key: "otros", text:"Otros", value:"otros"}
];

export default function InputTareas(props) {
    const [task, setTask] = useState({
        idTask: "", 
        taskName: "",
        categoryName: ""
    });

    const [error, setError] = useState(false);
    const { creaTask } = props; //los props sirven para pasar funciones a traves de objetos en react

    const taskNameChange = (e) => {
        setTask({
            ...task, //reaiza una copia de la tarea previamente regsitrada en nuestro estatus
            [e.target.name]: e.target.value
        });
    };

    const catName = (e, data)=>{
        setTask({
            ...task, 
            [data.name]: data.value
        });
    };

    const onSubmitTask = (e) =>{
        
        //console.log("enviando datos");
        //Que no recargue la pagina
        e.preventDefault();
        //validacion de los inputs
        if (task.taskName.trim() === ""){
            setError(true);
            return;
        }
        //Eliminar el mensaje previo
        if (task.taskName.trim !== ""){
            setError(false);
        }
        //setError(false)
        //asignar un ID
        task.idTask = uuidv4();
        //Crear la tarea
        //console.log("task desde Tareas", task);
        creaTask(task);        
        //limpiar los datos.
        setTask({
            idTask: "",
            taskName: "",
            categoryName: ""
        });
    };
    
    
    return (
        <>
            <Grid centered columns={2}>
                <Input type="text" action>
                    <Input size="small" icon="add" 
                    placeholder="Tarea a realizar..." 
                    iconPosition="left" name="taskName" 
                    value={task.taskName}
                    onChange={taskNameChange} 
                    />
                    <Dropdown options={options} clearable  
                    placeholder="Categioria" 
                    selection value={task.categoryName} 
                    name="categoryName"
                    onChange={catName}/>
                    <Button type="submit" color="purple" onClick={onSubmitTask}>Añadir tarea</Button>
                </Input>
            </Grid>
            {error && (
                <Grid centered>
                    <Header as="h4" color="red" className="alert-error-form">
                        <Icon name="close"/>
                        <Header.Content>La tarea es obligatoria</Header.Content>
                        <Icon name="close"/>
                    </Header>
                </Grid>
            )}            
        </>
    );
}