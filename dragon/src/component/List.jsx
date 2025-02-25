import { useSelector } from "react-redux";
import { selectDragons } from "../store/selector/DragonSelector.js";
import Dragon from "./Dragon.jsx";

const List = () => {
  const dragons = useSelector(selectDragons);
  console.log(dragons);

  return (
    <>
      <h2>Liste des dragons</h2>
      {dragons.length ? (
        <ul>
          {dragons.map((dragon) => (
            <Dragon key={dragon.id} dragon={dragon} />
          ))}
        </ul>
      ) : (
        <p>Aucun dragon dans la liste</p>
      )}
    </>
  );
};

export default List;
