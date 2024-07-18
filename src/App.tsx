import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { IoAdd, IoCloseOutline } from "react-icons/io5";

function App() {
  const [isOpenForm, setOpenForm] = useState(false);
  return (
    <>
      <button onClick={() => setOpenForm(!isOpenForm)}>
        {!isOpenForm ? <IoAdd /> : <IoCloseOutline />}
      </button>
      {isOpenForm && <Form />}
    </>
  );
}

export default App;
