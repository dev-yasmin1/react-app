function ListGroup() {
  let items = ["paris", "New york", "ahmed", "yasmin"];
  items = [];

  //if(items.length===0)
  //return(
  //  <>
  //  <h1>List Group</h1>
  //  <p>Not found</p>
  //  </>
  //)

  //const getMessage=() => {
  //  return items.length===0 ? <p>No items found</p> : null;;}
  return (
    <>
      <h1>List Group</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
