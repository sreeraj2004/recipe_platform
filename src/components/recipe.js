
// import React, { useState } from "react";
// import indian from '../jsonFiles/indian.json';
// import italian from '../jsonFiles/italian.json';
// import korean from '../jsonFiles/korean.json';
// import '../stylesSheets/recipe.css';
// import Parallax from "./Parallax";

// export default function Recipe() {
//     const [selectedRecipe, setSelectedRecipe] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");

//     // Combine recipes into a single array
//     const allRecipes = [...indian, ...italian, ...korean];

//     // Handle the search input change
//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     // Filter recipes based on the search term
//     const filteredRecipes = searchTerm
//         ? allRecipes.filter(recipe =>
//               recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//         : allRecipes;

//     // Handle recipe item click to open popup
//     const handleImageClick = (recipe) => {
//         setSelectedRecipe(recipe);
//     };

//     // Close popup
//     const handleClosePopup = () => {
//         setSelectedRecipe(null);
//     };

//     return (
//         <>
//             <h1 className="heading">Global Flavors</h1>
//             <input
//                 type="text"
//                 placeholder="Search for a recipe..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="search-bar"
//             />
//             <div className="recipe-list">
//                 {filteredRecipes.map((element, index) => (
//                     <li key={index} className="recipe-item">
//                         <div className="image-container" onClick={() => handleImageClick(element)}>
//                             <img
//                                 src={element.Pic}
//                                 alt={element.title}
//                                 className="recipe-image"
//                             />
//                             <p className="image-title">{element.title}</p>
//                         </div>
//                     </li>
//                 ))}
//             </div>

//             {selectedRecipe && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <span className="close" onClick={handleClosePopup}>&times;</span>
//                         <h2>{selectedRecipe.title}</h2>
//                         <p><strong>Ingredients:</strong> {selectedRecipe.ingredient.join(", ")}</p>
//                         <p><strong>Preparation:</strong></p>
//                         <ul className="preparation-list">
//                             {selectedRecipe.preparation.map((step, index) => (
//                                 <li key={index}>{step}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             )}
//             <Parallax />
//         </>
//     );
// }

// import React, { useState, useEffect } from "react";
// import indian from '../jsonFiles/indian.json';
// import italian from '../jsonFiles/italian.json';
// import korean from '../jsonFiles/korean.json';
// import '../stylesSheets/recipe.css';
// import Parallax from "./Parallax";

// export default function Recipe() {
//     const [selectedRecipe, setSelectedRecipe] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isPopupVisible, setIsPopupVisible] = useState(false); // New state for popup animation

//     // Combine recipes into a single array
//     const allRecipes = [...indian, ...italian, ...korean];

//     // Handle the search input change
//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     // Filter recipes based on the search term
//     const filteredRecipes = searchTerm
//         ? allRecipes.filter(recipe =>
//               recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//         : allRecipes;

//     // Handle recipe item click to open popup with animation
//     const handleImageClick = (recipe) => {
//         setSelectedRecipe(recipe);
//         setIsPopupVisible(true); // Trigger popup animation
//     };

//     // Close popup with fade-out effect
//     const handleClosePopup = () => {
//         setIsPopupVisible(false); // Start fade-out effect
//         setTimeout(() => setSelectedRecipe(null), 300); // Delay removal for animation
//     };

//     // Smooth scroll for Parallax component on mount
//     useEffect(() => {
//         const smoothScroll = () => {
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth"
//             });
//         };
//         smoothScroll();
//     }, []);

//     return (
//         <>
//             <h1 className="heading">Global Flavors</h1>
//             <input
//                 type="text"
//                 placeholder="Search for a recipe..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="search-bar"
//             />
//             <div className="recipe-list">
//                 {filteredRecipes.map((element, index) => (
//                     <li key={index} className="recipe-item">
//                         <div className="image-container" onClick={() => handleImageClick(element)}>
//                             <img
//                                 src={element.Pic}
//                                 alt={element.title}
//                                 className="recipe-image"
//                             />
//                             <p className="image-title">{element.title}</p>
//                         </div>
//                     </li>
//                 ))}
//             </div>

//             {selectedRecipe && (
//                 <div className={`popup ${isPopupVisible ? "show" : "hide"}`}>
//                     <div className="popup-content">
//                         <span className="close" onClick={handleClosePopup}>&times;</span>
//                         <h2>{selectedRecipe.title}</h2>
//                         <p><strong>Ingredients:</strong> {selectedRecipe.ingredient.join(", ")}</p>
//                         <p><strong>Preparation:</strong></p>
//                         <ul className="preparation-list">
//                             {selectedRecipe.preparation.map((step, index) => (
//                                 <li key={index}>{step}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             )}
//             <Parallax />
//         </>
//     );
// }

import React, { useState } from "react";
import indian from '../jsonFiles/indian.json';
import italian from '../jsonFiles/italian.json';
import korean from '../jsonFiles/korean.json';
import '../stylesSheets/recipe.css';
import Parallax from "./Parallax";

export default function Recipe() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Combine recipes into a single array
    const allRecipes = [...indian, ...italian, ...korean];

    // Handle the search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter recipes based on the search term
    const filteredRecipes = searchTerm
        ? allRecipes.filter(recipe =>
              recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : allRecipes;

    // Handle recipe item click to open popup
    const handleImageClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    // Close popup
    const handleClosePopup = () => {
        setSelectedRecipe(null);
    };

    return (
        <>
            <h1 className="heading">Global Flavors</h1>
            <input
                type="text"
                placeholder="Search for a recipe..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
            />
            
            {/* Display message if no recipes match the search term */}
            {filteredRecipes.length === 0 ? (
                <p className="no-recipes-message">No recipes found. Try a different search term.</p>
            ) : (
                <div className="recipe-list">
                    {filteredRecipes.map((element, index) => (
                        <li key={index} className="recipe-item">
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
            )}

            {selectedRecipe && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>&times;</span>
                        <h2>{selectedRecipe.title}</h2>
                        <p><strong>Ingredients:</strong> {selectedRecipe.ingredient.join(", ")}</p>
                        <p><strong>Preparation:</strong></p>
                        <ul className="preparation-list">
                            {selectedRecipe.preparation.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <Parallax />
        </>
    );
}
