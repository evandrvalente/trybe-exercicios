import './App.css';

const tasksOfTheDay = [ 'Acordar', 'Brincar', 'Comer', 'Dormir' ];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ul> Tarefas do dia
        {
          tasksOfTheDay.map((tasks)=> {
            return Task(tasks)
          })
        }
      </ul>
    </div>
  );
}

export default App;
