import React from 'react'
import "../../App.js"
import { useGlobalContext } from "../../Context.js"
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Searchbar.jsx';

export default function Header() {
    const { setquery, setorientation, setorder_by } = useGlobalContext();
    const Navigate = useNavigate();

    const onClickHandler = (e) => {
        setquery(e.currentTarget.textContent);
        Navigate(`/${e.currentTarget.textContent}`);
        document.getElementById("ScrollAfterSearch")?.scrollIntoView({
            behavior: 'smooth',
            top: "150px",
        }, true);
    }

    const OrientationHandler = (e) => {
        setorientation(e.currentTarget.textContent);

        document.getElementById("ScrollAfterSearch")?.scrollIntoView({
            behavior: 'smooth',
            top: "150px",
        }, true);
    }

    const order_ofHandler = (e) => {
        setorder_by(e.currentTarget.textContent);

        document.getElementById("ScrollAfterSearch")?.scrollIntoView({
            behavior: 'smooth',
            top: "150px",
        }, true);
    }


    return (
        <>
            <div id="scrollOnTop"></div>

            <nav id='TopBar' className=" navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
                <div className="container-fluid">

                    <Link to="/" className="navbar-brand" style={{ textAlign: "center", padding: "10px", fontSize: "25px", color: "#0d6efd", fontWeight: "600" }}>Magic Pictures</Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">



                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>


                        <Navbar placeholder="Search" SearchButtonVisible={true} />
                    </div>
                </div>
            </nav>


            <div className='heroSection' style={
                {
                    backgroundImage: `url(https://source.unsplash.com/1600x900/?Random)`,
                    backgroundColor: "#000000a8",
                    height: "370px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: "color-dodge",
                }
            }>
                <p id='heroSectionHeading'>Magic Pictures</p>
                <p id='heroSectionText'>Source of Unlimited High Quality Images
                    <br></br> <small>Powered by unsplash api</small> </p>

                <div>
                    <Navbar placeholder="Search High Resolution images" SearchButtonVisible={false} />
                </div>


            </div >

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: "sticky", flexDirection: "column", top: "27px", zIndex: "1", backgroundColor: "#1b1f22" }}>

                <div style={{ display: "flex", justifyContent: "flex-start", width: "100%", alignItems: "center" }}>

                    <div className="dropdown-center m-1">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Orientation </button>
                        <ul className="dropdown-menu" >
                            <li><div className="dropdown-item" onClick={OrientationHandler}>portrait</div></li>
                            <li><div className="dropdown-item" onClick={OrientationHandler}>squarish</div></li>
                            <li><div className="dropdown-item" onClick={OrientationHandler}>landscape</div></li>
                        </ul>
                    </div>

                    <div className="dropdown-center m-1">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Order  </button>
                        <ul className="dropdown-menu" >
                            <li><div className="dropdown-item" onClick={order_ofHandler}>latest</div></li>
                            <li><div className="dropdown-item" onClick={order_ofHandler}>oldest</div></li>
                            <li><div className="dropdown-item" onClick={order_ofHandler}>popular</div></li>
                        </ul>
                    </div>
                </div>

                <div id="tags">
                    <div className="tags hover   badge rounded-pill text-bg-primary" onClick={onClickHandler} > Nature </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Earth </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Monkey </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Bike </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Cities </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Bikes </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Art </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Space </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Mountains </div>
                    <div className="tags hover  badge rounded-pill text-bg-primary" onClick={onClickHandler} > Cars </div>
                </div>
            </div>

            <a href='#scrollOnTop' id='ScrollOnTop'>
                <p id='ScrollOnTopHeading'> Top</p>
                <span id='ScrollOnTopHeadingIcon' className="material-symbols-outlined">
                    ios_share
                </span>
            </a>

        </>
    )
}
