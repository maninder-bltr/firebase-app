const Homex = () => {
    const handleClick=()=>{
        alert("Hello clicked !!!  "+Math.round(Math.random()*10));
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}
 
export default Homex;