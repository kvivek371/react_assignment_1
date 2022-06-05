import React from "react";
import "./style.css"

function FunctionBased() {
    return (
      <>
      <section className="main__div">
        <h1>
            Assessment 1 using function based component
        </h1>
          <p className="ext__css">
            this is done using extrnal css
          </p>
          <p className="ext__css" style={{color:"coral",fontStyle:"italic"}}>
            this is done using inline css
          </p>
      </section>        
      </>
    );
  }

  export default FunctionBased;