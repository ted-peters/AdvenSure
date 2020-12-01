import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
// import { Item } from 'semantic-ui-react';


export default function CheckList() {
    const[list,setList]=useState([]) 
    const[item,setItem]=useState("")
    const handleCheck=(e)=>{console.log (e.target.value)}
    const deleteItem=(e)=>{
        let item = e.target.name
        const arr= [...list]
        let i=arr.findIndex(function(val){return val===item})
        arr.splice(i,1)
        setList(arr)
    }
    const handleChange=(e) => {setItem(e.target.value)}
    const handleClick=(e) => {
        const arr= [...list]
        arr.push(item)
        setList(arr)
    }
    return (
        <Container>
            <input value={item}onChange={handleChange}></input>
            <button onClick={handleClick}>Add item</button>
            <Row>
                <table>
                    <thead>
                        <tr>
                            <th>Packed</th>
                            <th>Items
                            </th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {list.length>0 ? list.map(item => {return(<tr><td><input type="checkbox"onChange={handleCheck}></input></td><td>{item}</td><td><button onClick={deleteItem}name={item}>X</button></td></tr>)}):<></>}
                            </tbody>
                </table>
                {/* <Col>
                <div><input type="checkbox"></input><label>Phone Charger</label></div>
                <div><input type="checkbox"></input><label>Deoderant</label></div>
                <div><input type="checkbox"></input><label>Underwear</label></div>
                <div><input type="checkbox"></input><label>Socks</label></div>
                <div><input type="checkbox"></input><label>Shirts</label></div>
                <div><input type="checkbox"></input><label>Pants</label></div>
                <div><input type="checkbox"></input><label>Shoes</label></div>
                <div><input type="checkbox"></input><label>Medications</label></div>
                <div><input type="checkbox"></input><label>Jackets</label></div>
                <div><input type="checkbox"></input><label>Swimsuits</label></div>
                </Col> */}
            </Row>
        </Container>
    )
}
