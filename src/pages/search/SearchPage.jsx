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
        <div style={{ padding: "20px" }}>
            <div id="ScrollAfterSearch"></div>
            <p id='ScrollAfterSearch' style={{ fontSize: "30px", backgroundColor: "white" }}> Search Result For <strong> {query} </strong> : </p >

            <InfiniteScrollComponent />

        </div>
    )
}
