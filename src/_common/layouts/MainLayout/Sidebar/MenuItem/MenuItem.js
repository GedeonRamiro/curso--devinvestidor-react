import MenuItemView from "./MenuItemView"
import { useState } from 'react'

const MenuItem = ({ item }) => {

    const [open, setopen] = useState(false);

    const handleClick = () => setopen(!open);
  
    return (
       <MenuItemView {...{open, item, handleClick}} />
    )
}

export default MenuItem