import Header from './Components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Tasks from './Components/Tasks'
import {useState,useEffect} from 'react'
import AddedTask from './Components/AddTask'
import Footer from'./Components/Footer'
import About from './Components/About'
function App() {
  //const name = "Jeyason"
  //const x = false
  //If x is true then print Yes, else print no.
  //<h2>Hello {x ? 'Yes' : 'No'}</h2>

  //Or we could do variable so...
  //<h2>Hello {name}</h2>

  //Or we could do just regular arthimetic operations

  const [showAddedTask,setShowAddedTask] = useState(false)

  const [tasks,setTasks] = useState([])

  useEffect(() => {

    const getTasks = async() =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
   
    getTasks()
  },[])

  //Fetch the tasks

  const fetchTasks = async() =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }


  //FetchTask

  const fetchTask = async(id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //Add Task

  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task),

    })
    const data = await res.json()

    setTasks([...tasks,data])

  }



  //Delete Task
  const deleteTask = async (id) =>{

    console.log("HELLO");

    console.log(id);

    await fetch(`http://localhost:5000/tasks/${id}`,{ method: 'DELETE'})
    
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle the reminder.
  const toggleReminder = async(id) =>{
    const taskToggled = await fetchTask(id)
    const updTask = { ...taskToggled,reminder: !taskToggled.reminder}
    

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {

      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task,reminder: data.reminder} : task))
  }

  return (
    <Router>
      <div className = 'appContainer' >
        <Header onAdd = {() => setShowAddedTask(!showAddedTask)} showAdd = {showAddedTask}/>
        
        <Route path = '/' exact render = {(props) => (
          <>

            {showAddedTask && <AddedTask onAdd = {addTask}  />}

            {tasks.length > 0 ?<Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder} /> : 'There are no tasks avaliable!'}


          </>

        )} />

        <Route path = '/about' component = {About} />

        <Footer />

      </div>
    </Router>

    
  );
}


/*

class App extends React.Component{
  render(){
    return <h1>Hello from a class</h1>
  }
}
*/

export default App;
