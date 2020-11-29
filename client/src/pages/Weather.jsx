import React from 'react'
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


