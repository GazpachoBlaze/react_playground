function ListGroup() {
    const items = [
        "Paris",
        "London",
        "Barcelona",
        "Tokyo",
        "Canada"
    ];
    return (
        <>
            <ul>
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth item</li>
            </ul>
        </>
    );
}

export default ListGroup;


