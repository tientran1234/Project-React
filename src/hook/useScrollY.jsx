import React, { useEffect, useState } from 'react';

function useScrollY() {
    const [scrollY, setScrollY] = useState(0);

    const handleScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        console.log("scoll:"+scrollY);
        setScrollY(scrollY);
    };

    useEffect(() => {
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.removeEventListener('scroll', handleScrollY);
        };
    }, []);

    return scrollY;
}
export default useScrollY;