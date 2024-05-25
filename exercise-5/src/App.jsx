import { CLOTHESDATA } from "./data";
import Card from "./components/Card";
import "./index.css";
function App() {
  return (
    <>
      <h1>Clothes Store</h1>
      <div className="container">
        {CLOTHESDATA.map((clothe,index)=>
          <Card key={index} clothes={clothe} />
        )}
      </div>
    </>
  );
}

export default App;
