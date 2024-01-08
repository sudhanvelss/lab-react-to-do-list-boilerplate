import './App.css'
import React from "react";
import TodoItem from './Component/Todoitem';

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            input : "",
            todoList : [],
        }
    }

    inputChange = (e) => {
        this.setState({
            input : e.target.value,
        })
    }
    formSubmit = (e) => {
      e.preventDefault();
      if (this.state.input.length > 0){
        this.setState({
          input : "",
          todoList : [...this.state.todoList,this.state.input],
        })
      }
    }
    upDateItem = (newItem, index) => {
      let data = this.state.todoList;
      data.splice(index, 1, newItem)
      this.setState({
        todoList : data,
      })
    }
    deleteItem = (index) => {
      let data = this.state.todoList;
      data.splice(
       index,1)
       this.setState({
        todoList : data,
       })
    }
    render(){
        return(
            <>
            <div>
                <form onSubmit={ this.formSubmit}>
                    <input type="text" placeholder="Enter the task" value={this.state.input} onChange={this.inputChange}/>  
                    <button className='button-1'>Add Item</button>
                </form>
                <h3>My tasks : {this.state.input}</h3>
                <div>
                    <h2>My todo list</h2>
                    {
                        this.state.todoList.length == 0 ? (
                            <>
                            <h3>There is no task to be done</h3>
                            </>
                        ): (
                            this.state.todoList.map((element, i) => {
                                return (
                                    <>
                                    <div>
                                      <TodoItem
                                      e = {element}
                                      index = {i}
                                      upDateItem = {this.upDateItem}
                                      deleteItem = {this.deleteItem}
                                      />
                                    </div>
                                    </>
                                )
                            })
                        )
                    }
                </div>
            </div>
            </>
        )
    }
}
export default Todo
