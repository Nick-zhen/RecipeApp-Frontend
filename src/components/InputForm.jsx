import InputText from "./InputText";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addRecipeAsync } from "../redux/recipes/thunks";

export default function InputForm() {

    const [title, setTitle] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [instruction, setInstruction] = useState("");
    
    // dispatch actions 
    const dispatch = useDispatch();

    const clearText = () => {
        setTitle("");
        setIngredient("");
        setInstruction("");
    }

    function addRecipe() {
        if (title === "" || ingredient === "" || instruction === "") {
            alert("plz input TEXT!");
        } else {
            const recipe = {
                name: title,
                ingredients: ingredient,
                steps: instruction
            }
            // console.log(recipe);
            dispatch(addRecipeAsync(recipe));
            // alert("The recipe was submitted");
            clearText();
        }
    }

    return (
        <div>
            <h3>Add Recipe</h3>
            <form>
                <InputText 
                    value = {title}
                    name="Title" 
                    rows="2" 
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }} 
                /><br/>
                <InputText 
                    value = {ingredient}
                    name="ingredients" 
                    rows="4" 
                    onChange={(event) => {
                        setIngredient(event.target.value);
                    }} 
                /><br/>
                <InputText 
                    value = {instruction}
                    name="instructions" 
                    rows="5"
                    onChange={(event) => {
                        setInstruction(event.target.value);
                    }} 
                /><br/><br/>
            </form>
            <button className="button button_stuff" onClick={addRecipe}>Add</button>
            <button className="button button_stuff" onClick={clearText}>Clear</button>
        </div>
    );
}