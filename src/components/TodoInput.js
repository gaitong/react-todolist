import React, {Component} from 'react'

export default class TodoInput extends Component{
    render(){

        const {handleSubmit, item, handleChange, editItem} = this.props;

        return(
            <div className="container">
        <div className="card card-body my-2">
            <label>ป้อนรายการที่ต้องทำ</label>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" value={item} onChange={handleChange}/>
                </div>
                <input type="submit" disabled={item?false:true} className={editItem?"btn btn-warning":"btn btn-primary"} value={editItem?"แก้ไข":"บันทึก"}></input>
            </form>
        </div>
        </div>
        )
    }
}