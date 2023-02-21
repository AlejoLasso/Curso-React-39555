import ItemDetail from "./ItemDetail";
import Data from "../data.json";


const ItemDetailContainer = () => {
    return <ItemDetail mangas={Data} />;
};

export default ItemDetailContainer;