import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({initial, stock, onAdd  }) => {
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock ){
            setQuantity (prev => prev + 1 )
        }
    } 

    const decrement = () => {
        if(quantity > 1){
            setQuantity (prev => prev - 1 )
        }
    } 


  return (
    <div className= "Counter">
        <div className="Controls">
        <button className="Button" onClick={decrement}>-</button>
          <h3 className="Number">{quantity}</h3>
        <button className="Button" onClick={increment}>+</button>
        </div>
        <div>
            <button className="Button" onClick={() => onAdd(quantity)} disables={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}

export default ItemCount