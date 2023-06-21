import * as React from 'react';

const hmIcon = {
   margin: "0 auto",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   
}

function Home(){
    return(
    <>
        <div style={hmIcon} className="hmIcon">
            <i className="fa-solid fa-seedling" style={{color:'green', transform:"scale(3)"}}></i>
            <p>Add a plant</p>
        </div>
       <span style={{borderRadius: "50%", width: "5%"}}><i className="fa-solid fa-seedling" style={{color:'white', }}></i>+</span>
    </>
        
    )
}
export default Home;