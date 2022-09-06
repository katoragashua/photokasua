import React, { useState, useEffect } from "react";
const Context = React.createContext("");

const ContextProvider = (props) => {
  // Setting state
  const [images, setImages] = useState(() => []);
  const [cart, setCart] = useState(() => []);
  const [query, setQuery] = useState(() => ({ queryString: "" }));
  const [page, setPage] = useState(() => 1);

  //State to hold queried photos
  const [photos, setPhotos] = useState(() => []);

  // Create a state to update searchBg every hour
  const [hour, setHour] = useState(() => new Date().getHours());

  setTimeout(function getTIme() {});

  // Getting API data and passing to state

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?query=${query.queryString}&page=${page}&count=30&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU`
    )
      .then((response) => response.json())
      .then((data) => {
        const photosArray = data.map((datum) => ({
          ...datum,
          isFavorite: false,
          price: getPrice(), // Add price
        }));

        //Setting images when query is falsy
        setImages((prev) => {
          if (!query.queryString) {
            return prev.concat(photosArray);
          } else {
            return prev;
          }
        });

        //Setting photos when query is truthy
        setPhotos((prev) => {
          if (query.queryString) {
            return prev.concat(photosArray);
          } else {
            return [];
          }
        });
      });

  }, [query, page]);

  console.log(images);

  // Increment page number
  const incrementPageNum = () => {
    setPage((prev) => prev + 1);
  };

  // Setting query
  function updateQuery(word) {
    setQuery((prev) => {
      if (word.trim() === "") {
        return { ...prev, queryString: "" };
      } else {
        return { ...prev, queryString: word };
      }
    });
  }

  // Dynamically setting random price
  const getPrice = () => {
    let price = Math.floor(Math.random() * 5) + 3.99;
    return price;
  };

  // Favorite/like an image
  const favorite = (id) => {
    const arr = query.queryString ? photos : images;
    const photosArray = arr.map((img) => {
      if (img.id === id) {
        return {
          ...img,
          isFavorite: !img.isFavorite,
          likes: !img.isFavorite ? img.likes + 1 : img.likes - 1,
        };
      } else {
        return img;
      }
    });
    setImages((prev) => photosArray);
    setPhotos((prev) => photosArray);
  };

  // Add image to cart
  const addToCart = (id) => {
    const arr = query.queryString ? photos : images;
    const photo = arr.find((img) => img.id === id);

    setCart((prev) => [...prev, photo]);
  };

  // Remove image from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((img) => img.id !== id));
  };

  // Empty cart
  const emptyCart = () => setCart([]);

  console.log(query);

  return (
    <Context.Provider
      value={{
        images,
        cart,
        query,
        photos,
        hour,
        favorite,
        addToCart,
        removeFromCart,
        updateQuery,
        emptyCart,
        incrementPageNum,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
