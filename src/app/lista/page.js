'use client'
import { useState, useEffect } from 'react'
import "./style.css"

export default function Lista() {
    const [usuário, setUsuário] = useState(['multímetro', 'osciloscópio'])
    const [itemname, setItemName] = useState('')

    const handleChange = (ev) => {
        setItemName(ev.target.value)
    }

    const handleClick = (ev) => {
        lista.push(itemName)
        setLista([...lista])
        setItemName('')
    }

    useEffect(() => {
        console.log('useEffect vazio')
    }, [])

    useEffect(() => {
        console.log('itemName', itemName)
    }, [itemName])

    useEffect(() => {
        console.log('lista', lista)
    }, [lista])
    return (
        <>
            <h1>Lista de compras</h1>

            <div>
                <input name="item" onChange={handleChange} value={itemname} />
                <button onClick={handleClick}>Adcionar</button>
            </div>

            <h3>items</h3>

            <p>Valor de temName: {itemName}</p>

            <ul>
                {lista.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </>
    );
}