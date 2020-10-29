import React from 'react';

const toDOList = (props) => {
    return (
        <>

            <div className ="todo_style"
             onClick={() => {
                props.onSelect(props.id);
            }}>
            <button className="but"> - </button>
            <li> {props.text} </li>
            </div>
        </>
             );
};

export default toDOList;
