import React, { useState } from 'react'
import ImageComponent from "../Image Card/ImageComponent"

export default function Modal(props) {
    const [copyAlert, setcopyAlert] = useState(false);

    function copyLinkInModal() {
        const ClipBoard = navigator.clipboard;
        ClipBoard.writeText(props.downlodUrl).then();
        setcopyAlert(true);
    }

    const imgDownlodHandler = () => {
        console.log(props.altDescription);
        console.log(props.downlodUrl);
    }


    setTimeout(() => {
        setcopyAlert(false);
    }, 3000);


    const css = {
        model_img: {
            width: "50%",
            borderRadius: "7px",
        },
        userImg: {
            borderRadius: "50%",
            width: "40px",
        },
        usercontainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            padding: "5px",
            margin: "5px",
        }
    }

    return (

        <div className="modal modal-xl fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div className="modal-dialog">
                <div className="modal-content">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="buttonBackground"></div>

                    <div className="container-fluid d-flex flex-column align-items-center justify-content-center ">

                        <div style={css['usercontainer']}>

                            <img style={css['userImg']} src={props.profile_image} alt='...' />

                            <p>{props.first_name} {props.last_name} </p>
                            <p onClick={copyLinkInModal} ><span className="material-symbols-outlined">share</span></p>

                        </div>

                        {copyAlert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Link Copied on Clipboard</strong>
                        </div>}

                        <div style={css['model_img']}>
                            <ImageComponent imgurl={props.imgUrl} />
                        </div>

                        <div onClick={imgDownlodHandler} type="button" className="btn btn-secondary my-2" >Downlod Image</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
