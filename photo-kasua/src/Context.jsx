import React, {useState, useEffect} from "react"
const Context = React.createContext("")

const ContextProvider = (props) => {

    const [images, setImages] = useState(() => [])
    const [cart, setCart] = useState(() => [])
    const [query, setQuery] = useState(() => "")

    useEffect(() => {
        fetch(`https://api.unsplash.com//photos/random/?query=${query}&count=3&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU`)
            .then(response => response.json())
            .then(data => {
                const photosArray = data.map(datum => ({...datum, isFavorite: false, price: getPrice()}))
                setImages(prev => photosArray)
            })
    }, [query])

    function updateQuery(word) {
        setQuery(prev => word)
    }
    
    const addToCart = (id) => {
        const photo = images.find(img => img.id === id)

        setCart(prev => ([...prev, photo]))
    }

    const getPrice = ()=> {
        let price = Math.floor(Math.random() * 5) + 3.99
        return price
    }

    const favorite = (id) => {
        const photosArray = images.map(img => {
            if(img.id === id){
                return {
                    ...img,
                    isFavorite: !img.isFavorite,
                    likes: !img.isFavorite? img.likes + 1: img.likes - 1
                }
            }else {
                return img
            }
        })
        setImages(prev => photosArray)
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(img => img.id !== id))
    }

    const emptyCart = () => setCart([])
    
    return (
        <Context.Provider value={{images, cart, favorite, addToCart, removeFromCart, updateQuery, emptyCart}}>
            {props.children}
        </Context.Provider>
    );
};

export {ContextProvider, Context}