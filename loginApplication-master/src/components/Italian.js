import React from 'react';

function Italian(props) {
    console.log(props);
    return (
        <div>
        <section style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'30vh'
        }}>
        </section>
            <h3>Italian</h3>
            <ul className="list-group">
            {props.cuisine ? props.cuisine.map((item, index)=>{
                return <li key={index} className="list-group-item">{item}</li>
            }):''}
            </ul>
        </div>
    );
}

export default Italian;