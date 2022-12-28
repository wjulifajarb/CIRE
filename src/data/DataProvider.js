import React, {useState, useEffect, createContext} from 'react';
import Data from "../data"

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const product = Data.services
        product ? setProducts(product): setProducts([])
    },[])

    const addCart =(id) =>{
        const check = cart.every(services =>{
            return services.id !== id;
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...data])
        } 
        else{
            alert("El producto ya está en tu carrito")
        }
    }
    
    const [cart, setCart] = useState(()=>{
        const datCart = localStorage.getItem('dataCart');
        const dataCart = JSON.parse(datCart);
        return dataCart;
    });

    useEffect(()=>{
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart]);


    useEffect(() =>{
        const getTotal = () =>{
            const res = cart.reduce((prev, services) =>{
                return prev + (services.price * services.amount);
            }, 0)

            setTotal(res)
        }
        getTotal()
    },[cart])

    const value = {
        products: [products],
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal],
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}