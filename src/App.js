import React from 'react';
import './App.css';
import ToDoFormContainer from "./containers/ToDoFormContainer";
import ToDoListContainer from "./containers/ToDoListContainer";
import {BrowserRouter, Link, Route} from "react-router-dom";
import ToDoDoneListContainer from "./containers/ToDoDoneListContainer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header className="App-header">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">All Todo List Page</Link>
                            </li>
                            <li>
                                <Link to="/donePage">Done Todo List Page</Link>
                            </li>
                        </ul>
                    </nav>
                    <ToDoFormContainer/>
                    <Route path="/" exact component={ToDoListContainer}/>
                    <Route path="donePage" component={ToDoDoneListContainer}/>
                </header>
            </BrowserRouter>
        </div>
    );
}

export default App;
