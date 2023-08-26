import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from '../addcatform';

const initialCats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: './imagesClassExercise/cheetah.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: './imagesClassExercise/cougar.jpg'},
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: './imagesClassExercise/jaguar.jpg'},
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: './imagesClassExercise/leopard.jpg'},
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: './imagesClassExercise/lion.jpg'},
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: './imagesClassExercise/snowLeopard.jpg'},
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: './imagesClassExercise/tiger.jpg'},
];

function BigCats() {
    const [displayedCats, setDisplayedCats] = useState(initialCats);

    const sortCatsAlphabetically = () => {
        const sortedCats = [...displayedCats].sort((a, b) => a.name.localeCompare(b.name));
        setDisplayedCats(sortedCats);
    };

    const reverseCatsList = () => {
        const reversedCats = [...displayedCats].reverse();
        setDisplayedCats(reversedCats);
    };

    const filterPantheraCats = () => {
        const pantheraCats = displayedCats.filter(cat => cat.latinName.startsWith('Panthera'));
        setDisplayedCats(pantheraCats);
    };

    const resetCatsList = () => {
        setDisplayedCats(initialCats);
    };

    const addNewCat = (newCat) => {
        newCat.id = displayedCats.length + 1;
        setDisplayedCats(prevCats => [...prevCats, newCat]);
    };

    const deleteCat = (id) => {
        const updatedCats = displayedCats.filter(cat => cat.id !== id);
        setDisplayedCats(updatedCats);
    };

    return (
        <div>
            <div className="button-group">
                <button onClick={sortCatsAlphabetically}>Sort Alphabetically</button>
                <button onClick={reverseCatsList}>Reverse List</button>
                <button onClick={filterPantheraCats}>Show Panthera Family Only</button>
                <button onClick={resetCatsList}>Reset List</button>
            </div>

            <div className="cats-list">
                {displayedCats.map(cat => (
                    <SingleCat key={cat.id} cat={cat} onDelete={() => deleteCat(cat.id)} />
                ))}
            </div>
            <AddCatForm onAdd={addNewCat} />
        </div>
    )
}


export default BigCats;

