import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import Info from "./pages/Info";
import { useLocation } from "react-router-dom";

import { Context } from "./Context";

function App() {
// Getting image and photos state to be passed to Info component
  const { images, query, photos } = useContext(Context); 
// Getting pathname
  const { pathname } = useLocation();
  const { queryString } = query;
  console.log(queryString);

  return (
    <div className="app">
      <Header />
      {/* Dynamically rendering Search only on Home page */}
      {pathname === "/" && <Search />}
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        {queryString && <Route path={`/photos`} element={<Photos />} />}
        <Route path={"/cart"} element={<Cart />} />
        <Route
          exact
          path={"/:img_query"}
          element={
            <Info images={images} photos={photos} queryString={queryString} />
          }
        />
      </Routes>
    </div>
  );
}
// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
export default App;
