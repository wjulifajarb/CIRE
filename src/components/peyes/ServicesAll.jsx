import React, { useContext } from "react";
import CardCategories from "../layouts/CardCategories";
import './ServicesAll.css'
import { DataContext } from "../../data/DataProvider";
import NavServices from '../layouts/NavServices'

const ServicesAll = () => {
  const value = useContext(DataContext)
  const [products] = value.products

    return (
      <div>
        <div>
          <NavServices/>
        </div>
        <div className="containerCards">
          {
            products.map(product =>(
              <CardCategories 
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              conditions={product.conditions}
              category={product.category}
              description={product.description}
              aomunt={product.aomunt}
              />
            ))
          }
          
        </div>
      </div>
    );
}

export default ServicesAll;
