import React from "react"
import './styles.css'

interface Props {
    title: string
    description: string
}

function ItemList({ title, description }: Props) {
    return (
        <div className="itemList"> 
            <strong>{title}</strong>
            <p>{description}</p>
            <hr />
        </div>
    )

}

export default ItemList