import Header from "./components/Header"
import ListCardProduct from "./components/ListCardProduct"
import React, { useState } from "react";

function App() {
  const [cartVersion, setCartVersion] = useState(0);
  const handleCartChange = () => setCartVersion(v => v + 1);

  return (
    <>
      <Header cartVersion={cartVersion} />
      <ListCardProduct onCartChange={handleCartChange} />
    </>
  )
}

export default App
