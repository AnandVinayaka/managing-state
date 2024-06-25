import { useState } from "react";

import { GROCERY_INFO } from "./data.js";
import Header from "./components/Header/Header.jsx";
import GroceryInfo from "./components/GroceryInfo/GroceryInfo.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import './components/Header/Header.css';
import './components/GroceryInfo/GroceryInfo.css'

function App() {
  const [selectedGrocery, setSelectedGrocery] = useState("please click a button");

  function handleSelect (selectedButton) {
    setSelectedGrocery(selectedButton);
  }

  return (
    <>
      <Header />

      <main>
        <section id="section-1">
          <GroceryInfo {...GROCERY_INFO[0]} />

          <GroceryInfo {...GROCERY_INFO[1]} />

          <GroceryInfo {...GROCERY_INFO[2]} >
            GROCERY 3
          </GroceryInfo>

          <GroceryInfo {...GROCERY_INFO[3]}/>
        </section>

        <section>
          <h2>Clickable Events</h2>

          <menu>
            <TabButton onSelect = {() => handleSelect("Chocolates")} />
            <TabButton onSelect = {() => handleSelect("Biscuits")} />
            <TabButton onSelect = {() => handleSelect("Millets")} />
            <TabButton onSelect = {() => handleSelect("Chickpeas")} />
          </menu>

          {selectedGrocery}
        </section>
      </main>
    </>
  )
}

export default App;