import { Link, useParams } from "react-router-dom";
import { dummyAPIBase } from "../Api";
import axios from "axios";
import { useState, useEffect } from "react";
export default function ReceipeDetails() {
    const [loadNeeded, setLoadNeeded] = useState(true)
    const param = useParams();
    const [recepieDetails, setRecepieDetails] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [tags, setTags] = useState([])
    const getDetails = () => {
        axios.get(`${dummyAPIBase}recipes/${param.id}`)
            .then(res => {
                setRecepieDetails(res.data)
                setLoadNeeded(!loadNeeded)
                setIngredients(res.data.ingredients)
                setInstructions(res.data.instructions)
                setTags(res.data.tags)
                // Ingredient()
                console.log("ingredients", recepieDetails.ingredients)
            })
    }
    const listItems = ingredients.map(ingredient => <span key={ingredient}>{ingredient}</span>);
    useEffect(() => {
        window.scrollTo(0, 0)
        getDetails()
        // console.log("param", param.id)
        setTimeout(() => {
            console.log(recepieDetails)
        }, 5000)
    }, [])
    return (
        <div className="dashboardpage p-2 recepie-details">
            <Link to='../recepies' className="text-light">Go back to all recepies</Link>
            <div className="d-flex justify-content-between align-items-center">
            <h1 className="dashboardpage-heading dancing-script">{recepieDetails.name}</h1>
            <p className="text-right tags"> <span className="tag">{recepieDetails.difficulty}</span> {recepieDetails.prepTimeMinutes} Mins </p>
            </div>
            
            <div className="ratio ratio-21x9 receipe-image mb-4 overflow-hidden">
                <img alt={recepieDetails.name} src={recepieDetails.image} />
                <img alt={recepieDetails.name} className="blurImg" src={recepieDetails.image} />
            </div>
            <div className="d-flex justify-content-between align-items-center">
            <p className="tags">
                {
                    tags.map(tag=>{
                        return(
                            <span key={tag} className="tag">{tag}</span>
                        )
                    })
                }
                </p>
                <p className="text-right color-green">Rating : {recepieDetails.rating} ({recepieDetails.reviewCount} Reviews)</p>
            </div>
            <h5 className="mb-2 color-green">Ingredients :</h5>
            <p className="ingredients">{listItems}</p>
            <h5 className="mb-2 color-green ">Process :</h5>
            <ol className="ingredients ps-3">{
                instructions.map((item, index) => {
                    return (
                        <li key={item}>{item}</li>
                    )
                })
            }</ol>

        </div>
    );
}