import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import SpringWire from './SpringWire';

const Home = () => {
    useGSAP(() => {
        const tl = new gsap.timeline();
        tl.from(".home_main", {
            y : window.innerHeight,
            duration : 2,
            delay :0.07 * 26 + 0.2,
            ease: "power4.inOut"
        },"eksath")
        tl.from(".txt", {
            duration: 1,
            delay: 0.07 * 35 + 0.5, 
            stagger: 0.1,
            y: 200,             
            ease: "power2.out"
        }, "eksath");
    }, []);

    return (
        <>
        <div className='home_main z-[999] relative min-h-screen text-[#F3C77C] bg-[#151414] w-full flex flex-col justify-center items-center tracking-[-3vw] text-[40vw] font-bold'>
            <div className="hello_text flex justify-center md:h-screen relative scale-y-125 font-helvetica text-[40vw] mb-[2rem] md:top-[5rem] font-extrabold">
                <span className='txt inline-block h-fit'>h</span>
                <span className='txt inline-block h-fit'>e</span>
                <span className='txt inline-block h-fit'>l</span>
                <span className='txt inline-block h-fit'>l</span>
                <span className='txt inline-block h-fit'>o</span>
            </div>
            <div className='text-[5vw] uppercase font-medium tracking-tight text-center mt-10'>
                hello how are <br/> you all
            </div>
        </div>
        <SpringWire/>
        </>
    );
};

export default Home;
