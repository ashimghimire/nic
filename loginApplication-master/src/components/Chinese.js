import React from 'react';



function Chinese(props) {
    return (
        <div>
        <section style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'30vh'
        }}>

        </section>
        <h3>Chinese </h3>
            <ul className="list-group">
            {props.cuisine ? props.cuisine.map((item, index)=>{
                return <li key={index} className="list-group-item">{item}</li>
            }):''}
            </ul>
        </div>
    );
}

export default Chinese;