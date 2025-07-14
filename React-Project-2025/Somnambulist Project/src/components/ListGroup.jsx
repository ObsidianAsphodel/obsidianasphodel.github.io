function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo"];

  //Can only return html and or other react components
  //By using curly braces {}, you're able to crete dynamic content
  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log({item},"Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
