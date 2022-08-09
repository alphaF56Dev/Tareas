import { Grid, Icon, Header } from "semantic-ui-react";
import Tarea from "./Tarea";
export default function ContenidoTarea(props){
    const {tasks, removeTask} = props;
    if (tasks.length === 0){
        return null;
    }
    return (
        <Grid className="task-content">
            <Header as="h2" icon textAlign="center">
                <Icon name="settings"/>
                Gestiona tus tareas
            </Header>
            <Grid.Row>
                {tasks.map((task, index) => {
                    return <Tarea task={task} removeTask={removeTask}/>;
                })}
            </Grid.Row>
        </Grid>
    );
}