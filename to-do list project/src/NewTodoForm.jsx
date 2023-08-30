import { useState } from "react"
export function NewTodoForm(props){
    {/* UseState is an hook given by react which takes in an default value*/}
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(newItem === "") return
        props.onSubmit(newItem)
        setNewItem("")
      }
      
    return(
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input 
                type="text" 
                value={newItem} 
                id="item"
                onChange={e => setNewItem(e.target.value)}>
                </input>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}