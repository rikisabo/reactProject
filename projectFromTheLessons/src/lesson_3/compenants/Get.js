
import React,{ useEffect } from "react";
import { useState } from "react";
export default function GetResponse(){
    const [pizzas,setPizzas]=useState([]);
    useEffect(()=>{
    const fetchPizzas=async()=>
    {
    
        try{
            const response = await fetch("http://localhost:5190/ChanisPizza/getPizzaList");
            
            const data =await response.json();
            console.log(data);
            setPizzas(data);
        }
       catch(error){
          console.error("error",error);
       }

    };
    fetchPizzas();
},[]);
    return(
        <>
        {pizzas.map((item, index) => (
                <div key={index}>
                    <p>Pizza Name: {item.pizzaName}</p>
                    <p>Pizza ID: {item.pizzaId}</p>
                    <p>Contains Gluten: {item.ifGloten ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </>
    );
}