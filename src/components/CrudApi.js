import { useEffect, useState } from "react";
import uniqId from "uniqid";

import { helpHttp } from "../helpers/helpHttp";
import { CrudFrom } from "./CrudFrom";
import { CrudTable } from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:3500/santos";

  useEffect(() => {
    setLoading(true);
    // api.get(url).then((res) => {
    helpHttp()
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = uniqId.time();
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };

    api.post(url, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`,
      options = {
        body: data,
        headers: { "Content-Type": "application/json" },
      };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (data) => {
    let isDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar el caballero ${data.name}?`
    );

    if (isDelete) {
      let endpoint = `${url}/${data.id}`,
        options = {
          headers: { "Content-Type": "application/json" },
        };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== data.id);
          setDb(newData);
        } else {
          setDb(null);
        }
      });
    } else {
      return;
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
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
