import React from "react";
import Item from "./Item";

function List({ items, deleteItem, editItem }) {
  let render_;
  let xd;

  if (items.length === 0) {
    render_ = <li>Aún no tenemos nada por aquí UwU</li>;

  } else {
    xd = <li>Administracion de Alumnos</li>;
    render_ = items.map((item) => (
      <Item
        key={item.id}
        item={item}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    ));
  }

  return <ul className="list">{xd}{render_}</ul>;
}

export default List;