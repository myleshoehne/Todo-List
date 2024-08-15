import { useState } from 'react'
import './App.css'
import AddItem from './components/AddItem'
import List from './components/List'

export interface Item {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  
  const [items, setItems] = useState<Set<Item>>(new Set());

  const handleAddItem = (item: Item) => {
    const updatedItems = new Set(items);
    setItems(updatedItems.add(item))
  }

  const handleComplete = (completedItems: Set<number>) => {
    const nonCompleteItems = Array.from(items).filter(item => !completedItems.has(item.id))
    setItems(new Set(nonCompleteItems))
  }

  return (
    <>
      <AddItem onAddClick={handleAddItem}/>
      <List listItems={items} onComplete={handleComplete}/>
    </>
  )
}

export default App
