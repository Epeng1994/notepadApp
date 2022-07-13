import React from 'react'



function Posts(props){


    return(
        <div className = 'taskContainer'>
            <h2>Tasks to Do</h2>
            <div className = 'taskList'>
                {
                    props.tasks.map(a=>{
                        return(
                            <div className = 'taskLine' id = {a.id}>
                                #{a.id}
                                {a.post}
                                <input type = 'checkbox'/>
                            </div>
                        )
                    })
                }
            </div>
            <button>Clear tasks</button>
            <button>Mark all completed</button>
            <button>Update tasks</button>
        </div>
    )
}



export default Posts