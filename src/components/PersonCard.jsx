import React, {useState} from "react";


const PersonCard = (props) =>{
    const [ageC, setCount] = useState({ ageCount: props.age });
    const handleClick = () => {
        setCount({
            ageCount: ageC.ageCount + 1
        });
    }

    return (
        <div>
            <h1>{ props.lastName }, {props.firstName} </h1>
            <p>Age:{ageC.ageCount} </p>
            <p>Hair Color: {props.hairColor} </p>
            <button onClick={ handleClick }>Happy Birthday</button>
        </div>
    )
}


export default PersonCard
