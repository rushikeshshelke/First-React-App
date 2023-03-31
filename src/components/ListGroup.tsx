import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (index: string) => void;
}

function ListGroup(props: ListGroupProps) {
  //   items = [];
  //   let selectedIndex = -1;

  const getMessage = () => {
    return props.items.length === 0 && <p>No items found!!!</p>;
  };

  //   if (items.length === 0)
  //     return (
  //       <Fragment>
  //         <h1>List</h1>
  //         <p>No items found</p>
  //       </Fragment>
  //     );

  //   Event Handler
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {getMessage()}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {props.items.map((item, index) => (
          <li
            key={item}
            // className="list-group-item active"
            // onClick={(event) => console.log(item, index, event)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
