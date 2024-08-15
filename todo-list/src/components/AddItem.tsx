import { useEffect, useRef, useState } from "react";
import { Item } from "../App";

interface AddItemProps {
    onAddClick: (item: Item) => void; 
}

export function AddItem({ onAddClick }: AddItemProps) {

    const [input, setInput] = useState('');
    const [idNum, setIdNum] = useState(0);
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const handleAdd = (text: string) => {
        setIdNum(idNum + 1)
        const item: Item = {id: idNum, text: text, isChecked: false}
        onAddClick(item);
    }

    useEffect(() => {
        console.log("here")
        inputRef.current?.focus();
    }, [])

    return (
        <>
            <input ref={inputRef} type='text' placeholder="Add item..." onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => handleAdd(input)}>Add</button>
        </>
    )
}

export default AddItem;