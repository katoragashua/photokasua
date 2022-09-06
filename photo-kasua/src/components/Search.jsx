import { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const { updateQuery, hour } = useContext(Context);

  // Declaring a state for the Search components background
  const [searchBg, setSearchBg] = useState(() => "");

  // Used to get query
  const queryRef = useRef(null);

  // Used to navigate to Photos page
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.unsplash.com//photos/random/?query=nature&orientation=landscape&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setSearchBg((prev) => data.urls.regular);
      });
  }, [hour]);

  // Creating a search input with navigation logic and query updating logic
  const searchQuery = (
    <div className="search-query">
      <input
        type="search"
        ref={queryRef}
        className="search-inp"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`./photos`, { replace: true });
            updateQuery(queryRef.current.value);
          }
        }}
        placeholder="Search Photos"
      />
      <span
        className="enterBtn"
        onClick={() => {
          navigate(`./photos`, { replace: true });
          updateQuery(queryRef.current.value);
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
      <h2 style={{ textAlign: "center", textShadow: "1px 1px 1px black", color: "white" } }>
        Download free stock photos, Royalty free or buy them in frames.
      </h2>
      <div className="container">{searchQuery}</div>
    </div>
  );
};

export default Search;