
import React, { Component } from 'react';
import Temp from '../comp/Temp'; 
import axios from 'axios';
import { Input, Button  } from 'reactstrap';


const APIKey = "41e8e493c737e006a71db86fa1745655";

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            city: "",
            citySearch: "Austin"
        }
        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount() {
        this.getWeather();
    }
    
    getWeather = () => {
        const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.state.citySearch + "&appid=" + APIKey + "&units=imperial";
        let a = axios.get(queryURL).then(function(data){
            return data.data
        });
        let b = fetch(a).then(function(data){return data.json()})

        console.log(b);
        // let items = "";

        // fetch(queryURL).then(function(response){return response.json();}).then(function(data){
        //     console.log(data);
        //     items = data;
        //     this.setState({
        //         data: items
        //     })
        // })

    }

    weatherTextCopy = (e) => {
        console.log(e.target.value);
        this.setState({
            city: e.target.value
        })
    }

    seachWeatherText = () => {
        console.log(this.state.city);
        this.setState({
            citySearch: this.state.city
        })
    }

    render() {
        let data = this.state.data
        // console.log(data);
        let city = data && data.city.name
        let date = data && data.list[0].dt_text
        let temp = data && data.list[0].main.temp
        // let icon1 = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
        return (
            <div className="container">
                <div className="row">
                    <Input type = "text" placeholder="Check Weather" id="weatherText" onChange={this.weatherTextCopy} value={this.state.city}></Input>
                    <Button onClick={this.seachWeatherText}>Search Weather</Button>
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

