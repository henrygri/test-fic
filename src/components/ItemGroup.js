import { createSelectable } from "react-selectable-fast";
import Item from "./Item";

const SelectableComponent = createSelectable(Item);

const ItemGroup = ({items}) => {

    const maxImport = items ? Math.max(...items.map(n => n.importo)) : 0;
    const months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

    return (
        <div className="list__group">
        {items && items.map((item, i) => (
            <SelectableComponent key={i} item={item} months={months[i]} value={maxImport} />
        ))}
        </div>
    );
};

export default ItemGroup;
