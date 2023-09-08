function SingleCat({ cat, onDelete }) {
    return (
        <div className="cat-container">
            <img src={cat.image} alt={cat.name} />
            <h2>{cat.name}</h2>
            <p>{cat.latinName}</p>
            <a href="#" onClick={e => {
                e.preventDefault();
                onDelete();
            }}>Delete</a>
        </div>
    );
}

export default SingleCat;

