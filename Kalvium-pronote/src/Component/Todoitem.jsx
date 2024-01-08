import React from "react";

class TodoItem extends React.Component{
     constructor(){
        super();
     }
     render(){
        let {e, index, upDateItem, deleteItem} = this.props;
        return (
            <div>
                <input type="text" onChange={(e)=> {
                    upDateItem(e.target.value, index)
                }}
                value={e}
                />
                <button className="button-2" onClick={() => {
                    deleteItem(index)
                }}>Delete Item</button>
            </div>
        )
     }
}export default TodoItem;