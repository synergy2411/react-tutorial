import React, { Component } from 'react';

class Table extends Component{
    
    render(){
        const {characterData, removeCharacter} = this.props;
        //console.log("Props", this.props);
        console.log(removeCharacter);
        // console.log(characterData, removeCharacter);

        const TableHeader = ()=>{
            return (
                <thead>
                    <tr>
                        <td>
                            Name : 
                        </td>
                        <td>
                            Job : 
                        </td>
                    </tr>
                </thead>
            )
        };
        const TableBody = (props)=> {
            console.log(props);
            const remove = (index)=>{
                alert("Removing");
                return props.removeCharacter(index);
            }
            const rows = props.characterData.map((row, index)=>{
                return (
                    <tr key={index}>
                        <td>{ row.name }</td>
                        <td>{ row.job }</td>
                        <td>
                            <button className ="btn btn-default" 
                                onClick={()=>remove(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            })
            return <tbody>{rows}</tbody>;
            
        }
        return (
            <table className="table table-responsive table-bordered">
                <TableHeader></TableHeader>
                <TableBody characterData = { characterData } 
                    removeCharacter = { removeCharacter }/>
            </table>
        )
    }
}

export default Table;