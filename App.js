import React, { useState } from 'react';
import './index.css';
import ToDOList from './toDoList';

const App = () =>{

    const [inputlist, setinputlist] = useState("");
    const[items, setitems] = useState([]);

    const itemEvent = (event) => {
        setinputlist(event.target.value);
    };

    const listItem = () => {
        setitems((oldItmes) => {
            return [...oldItmes, inputlist];
        });
        setinputlist("");
    };

    const deleteItem = (id) => {
        console.log("deleted");

        setitems( (oldItmes) => {
            return oldItmes.filter( (arrEle, index) =>{
                return index !== id ;
            });
        } );
    };

    return(
        <>
            <div className= "main_div">
                <div className= "center_div">
                <h1> U-ToDO List</h1>
                <br/>
                <input type="text" placeholder="Add a Items" onChange= {itemEvent} value= {inputlist}/> 
                <button onClick = {listItem}> + </button>
                
                <ol>
                {    items.map( (itemval,index)  => {
                     return (
                         <>
                         <div>
                        
                            <ToDOList
                            key= {index}
                            id= {index}
                            text= {itemval}
                            onSelect= {deleteItem}
                            />
                            </div>
                        </>
                        );
                    })
                }
                </ol>
                </div>
            </div>
        </>
)
};
export default App;
