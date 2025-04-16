import { dummyAPIBase } from "../Api";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authcontext } from '../App'
export default function Recepies() {
    const [authToken, setAuthToken,logout,userDetails] = useContext(authcontext);
    
    console.log("Profile Details",userDetails.role)
    const [recipes, setRecipes]=useState([])
    const fetchRecepies = ()=>{
        axios.get(`${dummyAPIBase}recipes`)
        .then(res=>{
            console.log(res.data.recipes)
            setRecipes(res.data.recipes)
            
        })
    }
    useEffect(()=>{
        fetchRecepies();
        console.log("auth Console", authToken)
    },[])
    return (
        <div className="dashboardpage p-2 ">
           <h1 className="dashboardpage-heading dancing-script">Our Recepies</h1>
           {
            recipes.map(item=>{
                return(
                    <div className="recepies_block d-flex" key={item.id}>
                        <div className="recepies_block_image pl-0">
                            <span className="type">{item.cuisine}</span>
                            <img alt={item.name} src={item.image} />
                        </div>
                        <div className="recepies_block_content">
                            <h2 className="Playfair recepies_block_content_heading"><Link to={`../recepies/${item.id}`}>{item.name}</Link></h2>
                            <p className="small mb-1">Rating : {item.rating} ({item.reviewCount} reviews)</p>
                            <p className="mb-1"><b>Ingredients</b> : {item.ingredients.join("  -  ")}</p>
                            <p><strong>Person</strong> : {item.servings}</p>
                        </div>
                    </div>
                )
            })
           }
        </div>
    );
}