import React, { useEffect, useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import ItemGroup from "./components/ItemGroup";

function App() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  const getData = async () => {
      await fetch('http://staccah.fattureincloud.it/testfrontend/data.json')
            .then((res) => res.json())
            .then((data) => {
              setData(data.mesi);
          });
  }

  const handleSelectionFinish = (obj) => {
    setSelected(obj)
  }

  
  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="App">
        <SelectableGroup
            className="main"
            clickClassName="tick"
            enableDeselect
            onSelectionFinish={handleSelectionFinish}
          >
          <ItemGroup items={data} />
      </SelectableGroup>
        <div className="selected_box">
          <h2>Mesi selezionati</h2>
          {selected && selected.map((item, i) => (
            <p key={i}>{item.props.months}</p>
          ))}
        </div>
    </div>
  );
}

export default App;
