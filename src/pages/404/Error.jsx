import React from 'react'
import { Link } from 'react-router-dom'
import "./error.css"

export default function Error(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1> Oops!</h1>
                            <div className="error-details">Sorry, an error has occured,  {props?.message?.length === undefined ? "Requested page not found!" : `${props.message}`} </div>
                            <div className="error-actions">
                                <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>Take Me Home </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
