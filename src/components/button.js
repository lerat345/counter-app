function Buttton(props){

    const incrementChange=()=>{
        props.increment();
    }

    const decrementChange=()=>{
        props.decrement();
    }
    return(
        <div>
            <button onClick={incrementChange} style={{background:'yellow'}}>+</button>
            <button onClick={decrementChange} >-</button>
        </div>
    )


}

export default Buttton