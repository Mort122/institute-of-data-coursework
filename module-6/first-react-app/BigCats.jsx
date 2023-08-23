import SingleCat from './SingleCat';

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: './imagesClassExercise/cheetah.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: './imagesClassExercise/cougar.jpg'},
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: './imagesClassExercise/jaguar.jpg'},
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: './imagesClassExercise/leopard.jpg'},
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: './imagesClassExercise/lion.jpg'},
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: './imagesClassExercise/snowLeopard.jpg'},
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: './imagesClassExercise/tiger.jpg'},
]

function BigCats() {
    return(
        <div className="big-cats">
            {cats.map(cat => (
                <SingleCat key={cat.id} cat={cat} />
            ))}
        </div>
    )
}

export default BigCats;
