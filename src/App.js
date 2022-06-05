import './App.css';
import React, {useState} from 'react';
import ClassBased from './ClassBased';
import FunctionBased from './FunctionBased'

const App = () => {

    const[beforeClkFn, afterClickFn] = useState({beforeClk:false})
    const[beforeClkClassFn, afterClkClassFn] = useState({beforeClkClassFn:false})

    const function_comp_btn = () => {
        beforeClkFn.state ? afterClickFn({state:false}) :afterClickFn({state:true})
    }

    const class_comp_btn = () => {
        beforeClkClassFn.state ? afterClkClassFn({state:false}) : afterClkClassFn({state:true})
    }

  return (

    <>
      <h1>
          Styling using Functional and Class Components
      </h1>
      <section className='main__menu'>
        <button onClick={function_comp_btn}>
            To see styling in functional component
        </button>
        <button onClick={class_comp_btn}>
            To see styling in class component
        </button>        
      </section>
      <section>
        {beforeClkFn.state && <FunctionBased /> }
        {beforeClkClassFn.state && <ClassBased /> }
      </section>
    </>
  );
}

export default App;

