import React from 'react'
import "../../App.js"
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../Context.js'


export default function Navbar(props) {
    const Navigate = useNavigate();

    const { setquery } = useGlobalContext();

    const clicked = () => {
        if (document.getElementById("searchbar").value.length > 0) {
            setquery(document.getElementById("searchbar").value);
            Navigate(`/ ${document.getElementById("searchbar").value}`);
            document.getElementById("ScrollAfterSearch").scrollIntoView({
                behavior: 'smooth',
                top: "150px",
            }, true);
        }
    }

    const keyPress = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.length > 0) {
                setquery(e.target.value);
                Navigate(`/ ${e.target.value}`)
                document.getElementById("ScrollAfterSearch").scrollIntoView({
                    behavior: 'smooth',
                    top: "150px",
                }, true);
            }
        }
    }

    return (
        <>

            <div className="d-flex" role="search">

                <input id='searchbar' onKeyDown={keyPress} className="form-control me-2" type="search" placeholder={props.placeholder} aria-label="Search" />

                {props.SearchButtonVisible && <button onClick={clicked} className="btn btn-outline-success" type="submit" >Submit</button>}

            </div>

        </>
    )
}
