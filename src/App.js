import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Swiggy Price Surge Model
      </header>
      <form className="Data-form">
        <span>Current DE Availability Number </span>
        <input type="number" name="currDE" id="currDE" min="0" />
        <br /><br />  
        <span>Current Fuel Price Number </span>
        <input type="number" name="currFuel" id="currFuel" min="0"/>
        <br /><br />  
        <span>Current Order Demand Number </span>
        <input type="number" name="currOrder" id="currOrder" min="0"/>
        <br /><br />  
        {/* <Weather /> */}
        <span>Normal DE Availability Number </span>
        <input type="number" name="normDE" id="normDE" min="0"/>
        <br /><br />  
        <span>Normal Order Demand Number </span>
        <input type="number" name="normOrder" id="normOrder" min="0"/>
        <br /><br />  
        <span>Region Id Number </span>
        <input type="number" name="regionId" id="regionId" min="1"/>
        <br /><br />    
        <input type="button" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
