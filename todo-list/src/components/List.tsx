import { useEffect, useState } from "react";
import { Item } from "../App";

interface ListProps {
    listItems: Set<Item>;
    onComplete: (checkedIds: Set<number>) => void;
}

export function List({ listItems, onComplete }: ListProps) {

    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
    const [showComplete, setShowComplete] = useState(false);
    
    const handleCheck = (Id: number) => {
        const tempCheckedItemSet = new Set(checkedItems);
        if(tempCheckedItemSet.has(Id)){
            tempCheckedItemSet.delete(Id)
            setCheckedItems(tempCheckedItemSet)
        } else {
            tempCheckedItemSet.add(Id)
            setCheckedItems(tempCheckedItemSet)
        }
    }

    useEffect(() => {
        setShowComplete(checkedItems.size > 0)
      }, [checkedItems]);

    return (
        <>
            <ol>
                {Array.from(listItems).map((item) => (
                    <li
                        key={item.id}
                        style={{ textDecoration: checkedItems.has(item.id) ? 'line-through' : 'none' }}
                    >
                        {item.text} 
                        <input type="checkbox" onChange={() => handleCheck(item.id)}/>
                    </li>
                ))}
            </ol>
            {showComplete && <button onClick={() => { onComplete(checkedItems); setCheckedItems(new Set()) }}>Complete</button>}
        </>
    )
}

export default List;