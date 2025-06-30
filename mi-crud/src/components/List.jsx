import React from "react";
import Item from "./Item";

// Lista completa de alumnos
function List({ items, deleteItem, editItem }) {
  let render_;
  let xd;

  if (items.length === 0) {
    render_ = <li class="about">Aún no tenemos nada por aquí UwU</li>;
  } else {
    xd = <li class="about">Administración de Alumnos</li>;
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
