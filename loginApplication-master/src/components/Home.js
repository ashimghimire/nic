import React from 'react';
import Headers from './header';



function Home(props) {
    
    const style = {
        section:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                marginTop:'50vh'
        }
      }

      const navigateToLogin=()=>{
        props.history.push('/login');
        
    }

    const navigateToRegister = () => {
          props.history.push('/register')  
    }

    

return (
        <div>
         <Headers {...props} navigateToLogin={navigateToLogin} navigateToRegister={navigateToRegister}/>  
         <section style={style.section}>
                Welcome to XYZ Restaurant
                </section>  
        </div>
    );
}

export default Home;