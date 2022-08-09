import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Container from './components/Container';
import Header from './components/Header';
import InputTareas from './components/Tareas';
import {useState, useEffect} from 'react';
import ContenidoTarea from './components/ContenidoTarea';

function App() {

  //asignacion de nuestra tarea en el local storage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if(!initialTasks){
    //console.log("Si detecta como nulo el objeto de initialTasks");
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks); //definimos la constante tasks

  //validar si nuestras tareas han cabiado, en caso de ser asi, almacenar nuestra información en nuestro almacenamiento local
  useEffect(() => {
    if(initialTasks){
      localStorage.setItem("tasks",JSON.stringify(tasks));
    }else{
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [initialTasks, tasks]);

  const creaTask = (task) => {    
      setTasks([...tasks, task]); //se copia la informacon de tasks y se agrega un task    
      //console.log("tarea desde App.js", task);
  };
  //console.log(tasks);

  const removeTask = (id)=>{
    const currentTasks = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTasks);
  }

  return (
    <Container>
      <Header />
      <InputTareas creaTask={creaTask} />
      <ContenidoTarea tasks={tasks} removeTask={removeTask}/>
    </Container>
  );
  /*(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. :D
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
