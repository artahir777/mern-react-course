import "./App.css";
import Card from "./components/card/card";
import Home from "./pages/home/Home";
import Form from "./components/form/form";
import Parent from "./components/nested-components/parent";
import { useState } from "react";
import Child from "./components/nested-components/child";
import GrandChild from "./components/nested-components/grandChild";

function App() {
  const [data, setData] = useState("some data");

  return (
    <div className="App">
      {/* <Home /> */}
      {/* Prop drilling happening here. */}
      {/* <Parent data={data} /> */}

      {/* State Lifting happening here */}
      {/* <Child data={data} setData={setData} /> */}

      {/* useEffect Example */}
      <GrandChild />
    </div>
  );
}

export default App;
