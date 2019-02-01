import React, { Component } from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}
 // map function is used so as to map elements from one array to other
 // it is a property of arrays in JS
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key= {index}>
                <td>{row.name}</td>
                <td>{ row.job }</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
}

// curly braces of characterData is for representing that it is a javascript expression 
class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter ={removeCharacter}
                 />
            </table>
        );
    }
}


export default Table; 