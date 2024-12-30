import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import { useScroll } from 'framer-motion';

const ScrollStripTrext = () => {
    const main = useRef();
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState(true);
    const lastScrollY = useRef(0);

    useGSAP(() => {
        gsap.to(".main",{
            transform : scrollDirection ? "translateX(-200%)" : "translateX(0%)",
            duration : scrollDirection ? 6 : 8,
            repeat : -1,
            ease : "none" ,
        });
        gsap.to(".main img", {
            rotate : scrollDirection ? 180 : 0
        })
    }, [scrollDirection])

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            if (latest > lastScrollY.current) {
                setScrollDirection(true);
            } else if (latest < lastScrollY.current) {
                setScrollDirection(false);
            }
            lastScrollY.current = latest;
        });
        return () => unsubscribe();
    }, [scrollY]);


    return (
        <div ref={main} className='relative w-full overflow-hidden flex text-4xl bg-[#D9FF06] font-brandium text-black'>
                <div className='main -translate-x-full flex flex-shrink-0 items-center p-12'>
                    <img className='h-16 mr-8' src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
                    <div className='text-5xl'>
                        THRIVE BEYOND LIMITS
                    </div>
                </div>
                <div className=' main -translate-x-full flex flex-shrink-0 justify-center items-center p-10 gap-8'>
                    <img className='h-16 mr-8' src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
                    <div className='text-5xl'>
                        THRIVE BEYOND LIMITS
                    </div>
                </div>
                <div className=' main -translate-x-full flex flex-shrink-0 justify-center items-center p-10 gap-8'>
                    <img className='h-16 mr-8' src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
                    <div className='text-5xl'>
                        THRIVE BEYOND LIMITS
                    </div>
                </div>
                <div className='main -translate-x-full flex flex-shrink-0 justify-center items-center p-10 gap-8'>
                    <img className='h-16 mr-8' src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
                    <div className='text-5xl'>
                        THRIVE BEYOND LIMITS
                    </div>
                </div>
        </div>
    )
}

export default ScrollStripTrext