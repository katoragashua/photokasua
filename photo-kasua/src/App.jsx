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
  console.log(query.queryString);

  return (
    <div className="app">
      <Header />
      {/* Dynamically rendering Search only on Home page */}
      {pathname === "/" && <Search />}
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        {query.queryString && <Route exact path={`/photos`} element={<Photos />} />}
        <Route path={"/cart"} element={<Cart />} />
        <Route
          path={"/:img_query"}
          element={
            <Info images={images} photos={photos} queryString={query.queryString} />
          }
        />
      </Routes>
      <h5 style={{ textAlign: "center" }}>
        Huge thanks to <a href="https://unsplash.com" target="_blank">Unsplash</a> for letting
        developers like me use their Api
      </h5>
    </div>
  );
}
// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
export default App;
