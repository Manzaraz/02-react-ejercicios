import { useState } from "react";
import uniqId from "uniqid";
import { CrudFrom } from "./CrudFrom";
import { CrudTable } from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    data.id = uniqId.time();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (data) => {
    let isDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar a ${data.name}?`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id === data.id);
      setDb(newData);
    } else {
    }
  };
  return (
    <div>
      <h2>Crud API usando Fetch</h2>
      <article className="grid-1-2">
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
      </article>
    </div>
  );
};

export default CrudApi;
