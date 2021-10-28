import React, { useState } from "react";
import uniqId from "uniqid";

import { CrudFrom } from "./CrudFrom";
import { CrudTable } from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = uniqId.time();
    setDb([...db, data]);
  };
  const updateData = (data) => {};
  const deleteData = (data) => {};
  return (
    <div>
      <h2>CRUD App</h2>
      <CrudFrom
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};
