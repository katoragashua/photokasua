import React, {useContext} from "react"
import "./App.css";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import Info from "./pages/Info"

import {Context} from "./Context"

function App() {
  const {images} = useContext(Context)
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route exact path={"/"} element={<Photos />}/>
        <Route path={"/cart"} element={<Cart />} />
        <Route exact path={"/:query"} element={<Info images={images}/>} />
      </Routes>
    </div>
  );
}
// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
export default App;
