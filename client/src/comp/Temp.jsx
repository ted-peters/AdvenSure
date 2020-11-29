import React from 'react'

export default function Temp(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 py-2">
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8 bg-danger p-2">{props.date}</div>
                    <div className="col-4 bg-light p-1">{props.icon}</div>
                    <div className="col-4 bg-success p-1">{props.temp}</div>
                    <div className="col-4 bg-info p-1">{props.humidity}</div>
                </div>
            </div>
        </div>
    )
}
