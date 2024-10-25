import React, { useState } from "react";
import indian from '../jsonFiles/indian.json';
import italian from '../jsonFiles/italian.json';
import '../stylesSheets/recipe.css';

export default function Recipe() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const recipes = [...indian, ...italian];

    const handleImageClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleClosePopup = () => {
        setSelectedRecipe(null);
    };

    return (
        <>
            <div className="recipe-list">
                {recipes.map(element => (
                    <li key={element.id} className="recipe-item">
                        <div className="image-container" onClick={() => handleImageClick(element)}>
                            <img
                                src={element.Pic}
                                alt={element.title}
                                className="recipe-image"
                            />
                            <p className="image-title">{element.title}</p>
                        </div>
                    </li>
                ))}
            </div>

            {selectedRecipe && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>&times;</span>
                        <h2>{selectedRecipe.title}</h2>
                        <p><strong>Ingredients:</strong> {selectedRecipe.ingredient}</p>
                        <p><strong>Preparation:</strong> {selectedRecipe.preparation}</p>
                    </div>
                </div>
            )}
        </>
    );
}
