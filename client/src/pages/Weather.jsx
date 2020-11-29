/* import React from 'react'
import Temp from '../comp/Temp' 

export default function Weather() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="cityName">Austin, TX</h1>
                    <div className="container">
                        <div className="row">
                            <Temp date="12/1/2020" icon="sunny" temp="50" humidity="20" />
                            <Temp date="12/2/2020" icon="sunny" temp="50" humidity="20" />
                            <Temp date="12/3/2020" icon="sunny" temp="50" humidity="20" />
                            <Temp date="12/4/2020" icon="sunny" temp="50" humidity="20" />
                            <Temp date="12/5/2020" icon="sunny" temp="50" humidity="20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 */
import React, { Component } from 'react'
import Temp from '../comp/Temp' 
import axios from 'axios'

const APIKey = "68498a4d04f4da5284313a372d17c548";

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            city: props.city
        }
    }

    async componentDidMount() {
        const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.state.city + "&appid=" + APIKey;
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

        return (
            <div className="container">
                <div className="row">
                    <h1 className="cityName">{city}</h1>
                    <div className="container">
                        <div className="row">
                            <Temp date="12/1/2020" icon="sunny" temp="50" humidity="20" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

