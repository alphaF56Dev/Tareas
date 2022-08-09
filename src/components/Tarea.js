import {Grid, Icon, Header, Segment, Button, Label} from "semantic-ui-react";
export default function Tarea(props){
    const {task, removeTask} = props;
    const { idTask, taskName, categoryName } = task;
    return(
        <Grid.Column width={8} className="task-Container">
            <Segment>
                {categoryName && (
                    <Label color="teal" ribbon="right">
                        {categoryName}
                    </Label>
                )}
                <Header as="h3" className="header-task">
                    {taskName}
                </Header>
                <Grid centered columns={2}>
                    <Grid.Column>                       
                        <Button color="red" onClick={() => removeTask(idTask)}>
                            <Icon name="remove circle"/> 
                            Eliminar
                        </Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Grid.Column>
    );
}