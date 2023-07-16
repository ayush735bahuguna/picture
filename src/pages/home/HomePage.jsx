import React, { useEffect } from 'react'
import { useGlobalContext } from '../../Context'
import InfiniteScrollComponent from '../../components/Infinite Scroll/InfiniteScrollComponent';

export default function HomePage() {
    const { setquery } = useGlobalContext();

    useEffect(() => {
        setquery("Random")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <InfiniteScrollComponent />
        </div>
    )
}
