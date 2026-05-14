import React from "react";

function NamesList(){
    const names = ["Pradnya","Pranali","Veena"];

    return(
        <div>
            <h2>Name List</h2>
            <ul>
                {names.map((name,index)=>(
                    <strong><p key={index}>{name}</p></strong>
                ))}
            </ul>
        </div>
    );
}
export default NamesList;