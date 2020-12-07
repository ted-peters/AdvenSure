import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Table,
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

export default function CheckList() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [checked, setChecked] = useState([]);
  const [userChecklist, setUserChecklist] = useState();
  const [newUserChecklist, setNewUserChecklist] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  let packedTrip = `${newUserChecklist}packed`;
  let unpackedTrip = `${newUserChecklist}unpacked`;

  useEffect(() => {
    setUserChecklist(JSON.parse(localStorage.getItem("userTripChecklist")));
    setNewUserChecklist(userChecklist);
    packedTrip = `${newUserChecklist}packed`;
    unpackedTrip = `${newUserChecklist}unpacked`;
    JSON.parse(localStorage.getItem(packedTrip)) === null
      ? localStorage.setItem(packedTrip, JSON.stringify(list))
      : setList(JSON.parse(localStorage.getItem(packedTrip)));
    JSON.parse(localStorage.getItem(unpackedTrip)) === null
      ? localStorage.setItem(unpackedTrip, JSON.stringify(checked))
      : setChecked(JSON.parse(localStorage.getItem(unpackedTrip)));
  }, newUserChecklist);

  const unpackedTripFunc = (x) => {
    const arr = [...checked];
    console.log(arr);
    setUserChecklist(JSON.parse(localStorage.getItem("userTripChecklist")));
    setNewUserChecklist(userChecklist);
    unpackedTrip = `${newUserChecklist}unpacked`;
     localStorage.setItem(unpackedTrip, JSON.stringify(x));
  };
  const packedTripFunc =  (x) => {
      console.log(x);
    const arr = [...list];
    console.log(arr);
    setUserChecklist(JSON.parse(localStorage.getItem("userTripChecklist")));
    setNewUserChecklist(userChecklist);
    packedTrip = `${newUserChecklist}packed`;
     localStorage.setItem(packedTrip, JSON.stringify(x));
  };
  const handleCheck = (e) => {
    let item = e.target.name;
    console.log(item);
    const arr = [...checked];
    arr.push(item);
    setChecked(arr);
    deleteItem(e);
    unpackedTripFunc(arr);
  };
  const deleteItemChecked = (e) => {
    let item = e.target.name;
    console.log(item);
    const arr = [...checked];
    let i = arr.findIndex(function (val) {
      return val === item;
    });
    arr.splice(i, 1);
    setChecked(arr);
    unpackedTripFunc(arr);
  };
  const deleteItem = (e) => {
    let item = e.target.name;
    console.log(item);
    const arr = [...list];
    let i = arr.findIndex(function (val) {
      return val === item;
    });
    arr.splice(i, 1);
    setList(arr);
    packedTripFunc(arr);
  };
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleClick = (e) => {
    const arr = [...list];
    arr.push(item);
    setList(arr);
    setItem("");
    packedTripFunc(arr);
  };
  const handleChecked = (e) => {
    let item = e.target.name;
    console.log(item);
    const arr = [...list];
    arr.push(item);
    setList(arr);
    deleteItemChecked(e);
    packedTripFunc(arr);
  };
  // adding item lists
  const addBasics = () => {
    const itemslist = [
      "headphones & charger",
      "chewing gum",
      "snacks",
      "travel pillow",
      "wallet",
      "credit/debit cards",
      "drivers liscends",
      "flight ticket/confirmations",
      "passport/visa",
      "cash",
      "foreign currency",
      "lip balm",
      "hand sanitizer",
      "mask",
      "pain reliever",
      "sunglasses",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };
  const addTechnology = () => {
    const itemslist = [
      "portable charger & cables",
      "phone & charger",
      "tablet & charger",
      "laptop & charger",
      "camera & charger",
      "power adapter",
      "audiobooks",
      "podcasts",
      "movies",
      "music",
      "downloaded Netflix shows",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };

  const addClothes = () => {
    const itemslist = [
      "underwear",
      "socks",
      "sleepwear",
      "outerwear",
      "t-shirts",
      "jeans",
      "shorts",
      "excersize clothes",
      "swimsuit",
      "shoes",
      "flip-flops",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };

  const addHygiene = () => {
    const itemslist = [
      "toothbrush",
      "toothpaste",
      "deodorant",
      "shampoo & conditioner",
      "cleanser",
      "hair brush/comb",
      "styling products",
      "perfume/cologne",
      "razor",
      "shaving cream",
      "q-tips",
      "tweezers",
      "medications",
      "pain reliever",
      "medications",
      "vitamins",
      "contacts & solution",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };

  const addFeminine = () => {
    const itemslist = [
      "jewelry",
      "makeup",
      "makeup remover",
      "face wash",
      "moisturizer",
      "curling/flat iron",
      "skincare",
      "tampons/pads",
      "birth control",
      "body lotion",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };

  const addBusiness = () => {
    const itemslist = [
      "blazers",
      "business-casual attire",
      "suit",
      "professional wear",
      "work documents",
      "office supplies",
      "notebook",
      "glasses & case",
      "umbrella",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };
  const addBeach = () => {
    const itemslist = [
      "sunscreen",
      "tank tops",
      "bathing suits",
      "hat",
      "goggles",
      "snorkels",
      "cover-up",
      "books",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };
  const addCold = () => {
    const itemslist = [
      "scarves",
      "beanies/hats",
      "layering shirts & pants",
      "gloves",
      "warm shirts & pants",
      "ear muffs",
      "thermal socks",
      "sweaters",
      "heavy coat",
      "boots",
      "hand warmers",
      "thermos",
      "polar bear maze",
    ];
    const arr = [...list];
    console.log(arr);
    const newitemslist = itemslist.concat(arr);
    setList(newitemslist);
    packedTripFunc(newitemslist);
  };

  return (
    <Container style={{ marginBottom: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  body
                  inverse
                  style={{ color: "black", opacity: ".6", borderRadius: "4px" }}
                  name="checklist"
                  id="examplechecklist"
                  placeholder="Mix and match items from our curated lists, or add your own here"
                  value={item}
                  onChange={handleChange}
                />
                <Nav>
                  <Button
                    onClick={handleClick}
                    style={{
                      borderRadius: "4px",
                      background: "linear-gradient(to top, #2193b0, #3a7bd5",
                      marginTop: "15px",
                      opacity: ".6",
                    }}
                  >
                    Add Item
                  </Button>
                  <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle
                      nav
                      caret
                      type="button"
                      style={{
                        background:
                          "linear-gradient(to bottom, #ece9e6, #ffffff)",
                        borderRadius: "4px",
                        marginTop: "15px",
                        marginLeft: "120px",
                        opacity: ".6",
                      }}
                    >
                      Pre-Curated Lists
                    </DropdownToggle>
                    <DropdownMenu
                      style={{
                        background:
                          "linear-gradient(to bottom, #ece9e6, #ffffff)",
                        opacity: ".9",
                      }}
                    >
                      <DropdownItem onClick={addBasics}>
                        Travel Basics
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={addTechnology}>
                        Technology/Entertainment
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={addClothes}>Clothes</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={addHygiene}>Toiletry</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={addFeminine}>
                        Feminine Travel Necesseties
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={addBusiness}>
                        Business
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={addBeach}>
                        Beach Essentials
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={addCold}>
                        Cold Weather
                      </DropdownItem>
                      <DropdownItem divider />
                    </DropdownMenu>
                  </Dropdown>
                </Nav>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      <Row
        style={{
          borderRadius: "6px",
          background: "linear-gradient(to bottom, #ece9e6, #ffffff)",
          opacity: ".7",
          marginTop: "6px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Table>
                <thead>
                  <tr>
                    <th>Packed</th>
                    <th>Items</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {list.length > 0 ? (
                    list.map((item) => {
                      return (
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              onClick={handleCheck}
                              name={item}
                            ></input>
                          </td>
                          <td>{item}</td>
                          <td>
                            <button onClick={deleteItem} name={item}>
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </tbody>
              </Table>
            </div>
            <div className="col-sm-12 col-md-6">
              <Table>
                <thead>
                  <tr>
                    <th>Unpacked</th>
                    <th>Items</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {checked.length > 0 ? (
                    checked.map((item) => {
                      return (
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              onChange={handleChecked}
                              name={item}
                            ></input>
                          </td>
                          <td>{item}</td>
                          <td>
                            <button onClick={deleteItemChecked} name={item}>
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <></>
                  )}
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
      <Button
        onClick={handleClick}
        style={{
          borderRadius: "4px",
          background: "linear-gradient(to top, #2193b0, #3a7bd5",
          marginTop: "15px",
          opacity: ".6",
        }}
      >
        Save Checklist
      </Button>
    </Container>
  );
}

