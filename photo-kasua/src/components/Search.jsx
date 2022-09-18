import { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const { updateQuery, hour, query, searchBg, photographer, handleQuery } =
    useContext(Context);

  // Used to get query
  const queryRef = useRef(null);

  // Used to navigate to Photos page
  const navigate = useNavigate();

  // Creating a search input with navigation logic and query updating logic
  const searchQuery = (
    <div className="search-query">
      <input
        type="search"
        ref={queryRef}
        className="search-inp"
        name="queryString"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`./photos/`, { replace: true });
            // updateQuery(queryRef.current.value);
          }
        }}
        placeholder="Search Photos"
        onChange={handleQuery}
      />
      <span
        className="enterBtn"
        onClick={() => {
          navigate(`./photos/`, { replace: true });
          // updateQuery(queryRef.current.value);
        }}
      >
        Search
      </span>
    </div>
  );

  return (
    <div
      className="search"
      style={{
        backgroundImage: `url(${searchBg})`,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          textShadow: "2px 2px 2px black",
          color: "white",
        }}
      >
        Download free stock photos, royalty free, or buy them in frames.
      </h2>
      <div className="container">{searchQuery}</div>
      <p style={{ textAlign: "center", textShadow: "2px 2px 2px black" }}>
        photo by {photographer}
      </p>
    </div>
  );
};

export default Search;
