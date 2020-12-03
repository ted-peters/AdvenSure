
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

