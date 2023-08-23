function SingleCat({ cat }) {
    return (
        <div className="single-cat">
            <img src={cat.image}/>
            <h1>{cat.name}</h1>
            <p>{cat.latinName}</p>
        </div>
    );
}

export default SingleCat;
