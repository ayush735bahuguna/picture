import React, { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { useGlobalContext } from '../../Context.js'
import ImageCard from '../Image Card/ImageComponent.jsx'
import Modal from '../Modal/Modal.jsx';
import Loader from '../loader/loader.jsx';
import Error from '../../pages/404/Error.jsx';



export default function InfiniteScrollComponent(props) {
    const { Data, query, setData, pageno, setPageno, Acess_key, isloading, orientation, order_by } = useGlobalContext();




    const [totalresults, settotalresults] = useState(0);
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [imgUrl, setimgUrl] = useState("");
    const [altDescription, setaltDescription] = useState("");
    const [downlodUrl, setdownlodUrl] = useState("");
    const [profile_image, setprofile_image] = useState("");
    const [imgId, setimgId] = useState();

    const fetchMoreData = async () => {
        try {
            setPageno(pageno + 1);
            var url = `https://api.unsplash.com/search/photos?client_id=${Acess_key}&query=${query}&per_page=10&page=${pageno + 1}&orientation=${orientation}&order_by=${order_by}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(Data.concat(parsedData.results))
            settotalresults(parsedData.totalResults);
        }
        catch (err) {
            return (< Error message={err.message} />)
        }
    }

    const css = {
        model_img: {
            width: "70%",
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
        <>
            {isloading && <h1 style={{ color: "white" }}> <Loader /> </h1>}

            {!isloading &&
                <div>
                    {Data?.length !== 0 ? (
                        <InfiniteScroll
                            dataLength={Data.length}
                            next={fetchMoreData}
                            hasMore={Data.length !== totalresults}
                            scrollThreshold={.99}
                            loader={<Loader />}
                            endMessage={<h3> No More Images</h3>}
                        >
                            <div style={css['img_container']} id="img_outer_container" >
                                {Data && Data.map((e, index) => {
                                    const changeId = () => {
                                        setimgUrl(e.urls.regular)
                                        setaltDescription(e.alt_description)
                                        setfirst_name(e.user.first_name)
                                        setlast_name(e.user.last_name)
                                        setprofile_image(e.user.profile_image.large)
                                        setdownlodUrl(e.links.download)
                                        setimgId(e.id)
                                        // console.log(e);
                                    }

                                    return (
                                        <div key={index} onClick={changeId} data-bs-toggle="modal" data-bs-target="#exampleModal" style={css['img']} className="img_container" >

                                            <ImageCard imgurl={e.urls.small} index={index} />

                                        </div>
                                    )
                                })}
                            </div>
                        </InfiniteScroll>
                    ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "25px", margin: "50px" }}>
                            No Content available
                        </div>
                    )}

                </div>
            }

            <Modal imgUrl={imgUrl} downlodUrl={downlodUrl} profile_image={profile_image} first_name={first_name} last_name={last_name} altDescription={altDescription} imgId={imgId} />

        </>
    )
}
