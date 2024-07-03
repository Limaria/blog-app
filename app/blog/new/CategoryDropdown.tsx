import React, { useState } from 'react'

type SelectOption = {
  id: number;
  name: string;
}

type Props = {
  selected: number | null;
  setSelected: (select: number) => void;
}


const CategoryDropdown = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(prevOpen => !prevOpen);
  }

  const selectOption = (id: number) => {
    props.setSelected(id);
    setOpen(false);
  }

  const list: SelectOption[] = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
  ]; 

  const currSelection = list.find(item => item.id === props.selected) || { name: 'Select a category' };

  return (
    <div className='my-6'><button type='button' onClick={toggleOpen} className='px-3 py-3 bg-yellow-500 rounded-md border'>{currSelection.name}</button>
      {
        open ? (
          <div className='absolute mt-2 bg-white rounded-md border neo-shadow'>
            {list.map((item) => (
              <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer" key={item.id} onClick={() => selectOption(item.id)}>{item.name}</div>
            ))}
          </div>
        ) : null

      }
    </div>
  )
}

export default CategoryDropdown