import React, { useEffect } from 'react'
import { useGlobalContext } from '../../Context'
import { useParams } from 'react-router';
import InfiniteScrollComponent from "../../components/Infinite Scroll/InfiniteScrollComponent";



export default function SearchPage() {
    const { query, setquery } = useGlobalContext();
    const params = useParams();

    useEffect(() => {
        setquery(params.text);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.text])

    return (
        <>
            <div id="ScrollAfterSearch"></div>
            <p id='ScrollAfterSearch' style={{ fontSize: "35px", backgroundColor: " #1b1f22", color: "whitesmoke", padding: "15px" }}> Search Result For <strong> {query} </strong> </p >

            <InfiniteScrollComponent />

        </>
    )
}
