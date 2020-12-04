import React, {useState} from 'react'
import { Container, Row } from 'reactstrap';
import { Button, Form, FormGroup, Input, Table, Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';



export default function CheckList() {
    const[list,setList]=useState([]) 
    const[item,setItem]=useState("")
    const[checked, setChecked]=useState("")
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const handleCheck=(e)=>{
        let item = e.target.name;
        console.log(item);
        const arr = [...checked];
        arr.push(item);
        setChecked(arr);
        deleteItem(e);
    }
    const deleteItemChecked=(e)=>{
        let item = e.target.name
        console.log(item);
        const arr= [...checked]
        let i=arr.findIndex(function(val){return val===item})
        arr.splice(i,1)
        setChecked(arr)
    }
    const deleteItem=(e)=>{
        let item = e.target.name
        console.log(item);
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
        setItem("");
    }
    const handleChecked=(e)=>{
        let item = e.target.name;
        console.log(item);
        const arr = [...list];
        arr.push(item);
        setList(arr);
        deleteItemChecked(e);
    }
    // adding item lists
    const addEssentials = () => {
        const itemslist = ["toothbrush", "toothpaste", "hairbrush", "deoderant", "underwear", "socks", "shirts", "pants"];
        const arr = [...list];
        console.log(arr);
        const newitemslist = itemslist.concat(arr);
        setList(newitemslist);
    }
    const addTechnology = () => {
        const itemslist = ["charger", "laptop"];
        const arr = [...list];
        console.log(arr);
        const newitemslist = itemslist.concat(arr);
        setList(newitemslist);      
    }

    const addColdWeather = () => {
        const itemslist = ["beanie", "heavy jacket", "long underwear", "hand warmers"];
        const arr = [...list];
        console.log(arr);
        const newitemslist = itemslist.concat(arr);
        setList(newitemslist);
    }

    const addBeach = () => {
        const itemslist = ["sunscreen", "tank-top", "margarita mix", "snacks", "sunglasses"];
        const arr = [...list];
        console.log(arr);
        const newitemslist = itemslist.concat(arr);
        setList(newitemslist);
    }

    const addBusiness = () => {
        const itemslist = ["professional wear", "laptop", "portfolio", "roladex"];
        const arr = [...list];
        console.log(arr);
        const newitemslist = itemslist.concat(arr);
        setList(newitemslist);
    }

    const addAdventure = () => {
        const itemslist = ["kayak", "chacos", "climbing gear", "good-times"];
        const arr = [...list];
        console.log(arr);
        const newitemslist = itemslist.concat(arr);
        setList(newitemslist);
    }


    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <Form>
                        <FormGroup>
                            <Input type="text" name="checklist" id="examplechecklist" placeholder="Add Item List" value={item}onChange={handleChange} />
                            <Nav>
                            <Button onClick={handleClick} style={{marginTop: "10px"}}>Add Item</Button>
                            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle nav caret>
                                    Quick Add Lists
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={addEssentials}>Travel Essentials</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={addTechnology}>Technology</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={addColdWeather}>Cold Weather</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={addBeach}>Beach</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={addBusiness}>Business</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={addAdventure}>Adventure</DropdownItem>
                                    <DropdownItem divider />
                                </DropdownMenu>
                            </Dropdown>
                            </Nav>
                        </FormGroup>
                    </Form>
                    </div>
                </div>
            </div>
            <Row>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Packed</th>
                                        <th>Items
                                        </th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {list.length>0 ? list.map(item => {return(<tr><td><input type="checkbox" onClick={handleCheck} name={item}></input></td><td>{item}</td><td><button onClick={deleteItem}name={item}>X</button></td></tr>)}):<></>}
                                        </tbody>
                            </Table>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Unpacked</th>
                                        <th>Items
                                        </th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {checked.length>0 ? checked.map(item => {return(<tr><td><input type="checkbox" onChange={handleChecked} name={item}></input></td><td>{item}</td><td><button onClick={deleteItemChecked}name={item}>X</button></td></tr>)}):<></>}
                                        </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                
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

