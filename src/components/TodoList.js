import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component{
    render(){
        const {items, handleDelete, handleEdit,clearList} = this.props;
        return(
        <ul className="list-group my-4">
            <h3 className="text-white">รายการที่ต้องทำทั้งหมด</h3>
            {items.map(item=>{
                return <TodoItem 
                key={item.id} 
                name={item.name}
                handleEdit={()=>handleEdit(item.id)}
                handleDelete={()=>handleDelete(item.id)}
                />
            })}
            <button onClick={clearList} className="btn btn-danger">Clear All</button>
        </ul>
        )
    }
}