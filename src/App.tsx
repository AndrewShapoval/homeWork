import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {v1} from "uuid";
import {Counter} from "./components/Counter/Counter";
import {Common} from "./components/common/Common";
import {HashRouter, Route} from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Homework from "./components/TaskOne/Homework";
import {MyLocalStorage} from "./components/MyLocalStorage/MyLocalStorage";

export type TaskType = {
    id: string
    name: string
    value: boolean
}

export type ValuesType = "important" | "noMatter" | "all";

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), name: "Family", value: true},
        {id: v1(), name: "React", value: true},
        {id: v1(), name: "Job", value: false},
        {id: v1(), name: "Travels", value: true},
        {id: v1(), name: "Games", value: false}
    ])

    function removeTasks(taskId: string) {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }


    let [filter, setFilter] = useState<ValuesType>("all")

    function changeFilter(newFilterValue: ValuesType) {
        setFilter(newFilterValue)
    }

    let tasksTodoList = tasks;
    if (filter === "important") {
        tasksTodoList = tasks.filter(t => t.value)
    }
    if (filter === "noMatter") {
        tasksTodoList = tasks.filter(t => !t.value)
    }

    return (
        <HashRouter>
            <div className="App">
                <NavBar/>
                <Route path='/PreJunior' render={() =>
                    <Homework name='Serg' message='How are you?'/>
                }/>
                <Route path='/PreJunior' render={() =>
                    <TodoList tasks={tasksTodoList}
                              removeTasks={removeTasks}
                              changeFilter={changeFilter}/>
                }/>
                <Route path='/PreJunior' render={() =>
                    <Common/>
                }/>
                <Route path='/Junior' render={() => <MyLocalStorage/>}/>
                <Route path='/Junior+' render={() => <div>Junior+</div>}/>
                {/*<Counter/>*/}
            </div>
        </HashRouter>
    );
}

export default App;
