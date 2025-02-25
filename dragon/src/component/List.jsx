import { useSelector } from "react-redux";
import { selectDragons } from "../store/selector/DragonSelector.js";
import Dragon from "./Dragon.jsx"; // Mise à jour du nom du composant

const List = () => {
  const dragons = useSelector(selectDragons);

  return (
    <>
      <h2>Liste des dragons</h2>
      {dragons.length ? (
        <ul>
          {dragons.map((dragon) => (
            <Dragon key={dragon.id} dragon={dragon} /> // Utilisation du nouveau nom de composant
          ))}
        </ul>
      ) : (
        <p>Aucun dragon dans la liste</p>
      )}
    </>
  );
};

export default List;
