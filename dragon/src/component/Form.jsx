import { useDispatch, useSelector } from "react-redux";
import { setDragonName, addDragon } from "../store/action/dragon-action.js";
import { useState } from "react";
import { selectDragon, selectDragons } from "../store/selector/DragonSelector.js";

const Form = () => {
  const [error, setError] = useState("");
  const dragon = useSelector(selectDragon);
  const dragons = useSelector(selectDragons);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setDragonName(value));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dragonExist = dragons.find(
      (drag) => drag.name.trim().toLowerCase() === dragon.name.trim().toLowerCase()
    );
    if (dragonExist) {
      setError("Ce dragon se trouve déjà dans la liste.");
      return;
    }
    if (dragon.name.trim() === "") {
      setError("Le nom du dragon ne peut pas être vide.");
      return;
    }
    setError("");
    dispatch(addDragon());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={dragon.name}
        onChange={handleChange}
        placeholder={"Nom du dragon"}
      />
      <p style={{ color: "red" }}>{error !== "" && error}</p>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default Form;
