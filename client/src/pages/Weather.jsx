/* 
import React, { Component } from 'react';
import Temp from '../comp/Temp'; 
import axios from 'axios';


const APIKey = "41e8e493c737e006a71db86fa1745655";

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            city: props.city
        }
    }

    async componentDidMount() {
        const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.state.city + "&appid=" + APIKey + "&units=imperial";
        let response = await axios.get(queryURL);
        console.log(response);
        
        this.setState({
            data: response.data
        })
    }

    render() {
        let data = this.state.data
        console.log(data);
        let city = data && data.city.name
        let date = data && data.list[0].dt_text
        let temp = data && data.list[0].main.temp
        // let icon1 = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
        return (
            <div className="container">
                <div className="row">
                    <h1 className="cityName">{city}</h1>
                    <div className="container">
                        <div className="row">
                            <Temp date={date} temp={temp}/>
                            

                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

 */


import React, { useState, useEffect } from 'react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';

const APIKey = "aed52c01e7f5375831def9553ce0837d"
const weatherDates = [0, 8, 16, 24, 32]

export default function Weather() {

    const [data, setData] = useState("");
    const [city, setCity] = useState('Houston');


    useEffect(() => {
        // weatherData();
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial").then(response => response.json()).then(data => setData(data));
    }, [data]);

    console.log(data);

    const weatherData = () => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial").then(response => response.json()).then(data => setData(data));
    }

    const findWeather = () => {
        let a = document.getElementById('searchWeatherCity').value;
        setCity(a);
        weatherData();
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <InputGroup>
                            <Input placeholder="Type Your City Name" id="searchWeatherCity" />
                            <InputGroupAddon addonType="append"><Button onClick={findWeather}>Find Weather</Button></InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
            </div>
            {
                data!==""?

            <div className="container p-5 bg-light m-5">
                <div className="row">
                    <div className="col-12">
                        <div className="h1">
                            {data.city.name}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {weatherDates.map(date => (
                        <div className="col-12">
                        <hr />
                            <div className="container">
                                <div className="row p-3" key={data.list[date].dt}>
                                    <div className="col-3">&#160;</div>
                                    <div className="col-9"><Moment unix  format="MM/DD/YYYY">{data.list[date].dt}</Moment></div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-4">
                                        <img src={`http://openweathermap.org/img/w/${data.list[date].weather[0].icon}.png`} alt="Weather Icon"/>
                                    </div>
                                    <div className="col-4 h3">Temperature: {data.list[date].main.temp}&deg;F</div>
                                    <div className="col-4 h3">Humidity: {data.list[date].main.humidity}%</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                :<div></div>
            }
        </div>
    )
}


/*

state = 0

thumbsup = setstate(state + 1)

state = 1
*/