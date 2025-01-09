import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { data } from "./HeaderElements"
import { Link } from 'react-router-dom'
import MenuCrossIcons from './MenuCrossIcons'
import { ScrollTrigger } from 'gsap/all'
import { useScroll } from 'framer-motion'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const SlideMenu = () => {
    const [isOpen , setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState(true);
    const lastScrollY = useRef(0);

    useGSAP(() => {
        gsap.to(".header2",{
            y : !scrollDirection ? 0 : -120,
            duration : 0.5,
            ease : "power4.inOut" ,
        });
        gsap.to(".header_text2", {
            y : scrollDirection ? 100 : 0,
            duration : 1,
            stagger : 0.1,
            ease : "power3.inOut"
        })
    }, [scrollDirection]);

    useGSAP(() => {
        gsap.to(".header2", {
            backgroundColor : !isOpen ? "" : "#151414",
            backdropFilter: !isOpen ? "blur(24px)" : "blur(0px)",
            duration : 1.5
        })
    }, [isOpen])

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

    const handleMenu = () => {
        const gsapTl = new gsap.timeline();

        gsapTl.to(".menu_options", {
            top: isOpen ? "3.5rem" : 0,
            stagger : isOpen ? -0.1 : 0.1,
            delay: isOpen ? 0 : 0.5,
            ease : isOpen ? "power3.in" : "power4.inOut",
        }, "abc");
        gsapTl.to(".menu_bg", {
            left: isOpen ? "100%" : "0%",
            duration: 1,
            delay: isOpen ? 0.5 : 0.2,
            ease: "power3.inOut",
        }, "abc");
        
        setIsOpen(prev => !prev);
    }
    return (
        <div 
            className={`header2 sm:hidden fixed top-0 text-[#F2E2C2] z-[9999] w-screen text-2xl max-md:text-xl h-[5rem] `}>
            <div className='overflow-hidden border- h-[5rem] w-screen p-2'>  
                <div className='flex flex-row header_text2 justify-between relative'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className='max-md:h-16' width="55.021" height="55.021" viewBox="0 0 63.021 63.021"><g id="Group_1108" data-name="Group 1108" transform="translate(-211 -79)"><path id="Path_579" data-name="Path 579" d="M964.514,168.576a1.815,1.815,0,0,0-1.912,1.434h3.735A1.812,1.812,0,0,0,964.514,168.576Z" transform="translate(-702.257 -75.956)" fill="#f2e2c2"></path><path id="Path_580" data-name="Path 580" d="M881.972,234.324a1.77,1.77,0,0,0-1.865,1.4h3.644A1.767,1.767,0,0,0,881.972,234.324Z" transform="translate(-659.403 -110.111)" fill="#f2e2c2"></path><path id="Path_581" data-name="Path 581" d="M913.068,236.585a1.884,1.884,0,0,0-.628-.424,1.989,1.989,0,0,0-.772-.152,2.037,2.037,0,0,0-.79.152,1.89,1.89,0,0,0-.628.424,2.111,2.111,0,0,0-.416.62,1.874,1.874,0,0,0-.152.755,2.018,2.018,0,0,0,.568,1.426,1.854,1.854,0,0,0,.628.424,2.017,2.017,0,0,0,.79.152,1.968,1.968,0,0,0,.772-.152,1.849,1.849,0,0,0,.628-.424,2.184,2.184,0,0,0,.424-.628,1.834,1.834,0,0,0,.161-.764,1.884,1.884,0,0,0-.161-.771A2.145,2.145,0,0,0,913.068,236.585Z" transform="translate(-674.766 -110.987)" fill="#f2e2c2"></path><path id="Path_582" data-name="Path 582" d="M859.911,140.232v63.021h63.021V140.232Zm32.774,11.722,2.267,4.922,2.284-4.922h1.912l2.284,4.922,2.284-4.922h3.559l-4.745,9.083h-2.09l-2.248-4.976-2.249,4.976h-2.09l-4.746-9.083Zm6.769,18.382c-1.278,0-1.641.95-1.641,2.056v4.594h-3.144v-8.861h3.144v1.14h.034a3.065,3.065,0,0,1,2.833-1.433c2.384,0,3.334,1.5,3.334,3.679v5.475H900.87v-4.318C900.87,171.82,901.009,170.335,899.454,170.335Zm-7.188-3.853a1.762,1.762,0,1,1,1.761-1.761A1.769,1.769,0,0,1,892.266,166.483Zm1.572,1.641v8.861h-3.143v-8.861Zm-17.659,20.533h-6.616a1.762,1.762,0,0,0,1.969,1.969,1.57,1.57,0,0,0,1.5-.812h3.023c-.5,2.09-2.487,3.04-4.509,3.04-2.936,0-5.13-1.658-5.13-4.715,0-2.954,2.022-4.733,4.907-4.733,3.074,0,4.853,1.9,4.853,4.923Zm3.71,4.1h-3.07v-12.78h3.07Zm.011-21.913h-2.183v6.142h-3.072V165.667h3.072v2.614H879.9Zm.617-6.789h3.144v5.194h.034a3.274,3.274,0,0,1,2.833-1.417c2.246,0,3.334,1.485,3.334,3.731v5.424h-3.144v-4.543c0-1.036-.156-2.106-1.416-2.106-1.244,0-1.641,1.07-1.641,2.106v4.543h-3.144Zm10.267,28.531H887.7v-.967a3.22,3.22,0,0,1-2.665,1.238,4.317,4.317,0,0,1-1.747-.347,4.2,4.2,0,0,1-1.392-.976,4.476,4.476,0,0,1-.925-1.476,5.04,5.04,0,0,1-.331-1.85,4.88,4.88,0,0,1,.322-1.773,4.535,4.535,0,0,1,.9-1.468,4.246,4.246,0,0,1,1.374-.993,4.2,4.2,0,0,1,1.765-.365,3.545,3.545,0,0,1,2.7,1.137v-.865h3.089Zm7.84-1.73a2.909,2.909,0,0,1-.849,1.028,4.018,4.018,0,0,1-1.306.645,5.845,5.845,0,0,1-1.68.229,6.823,6.823,0,0,1-3.479-1l1.12-2.172a4.374,4.374,0,0,0,2.444.881,1.209,1.209,0,0,0,.7-.185.561.561,0,0,0,.271-.475.807.807,0,0,0-.042-.28.448.448,0,0,0-.178-.2,1.394,1.394,0,0,0-.4-.17c-.175-.051-.4-.1-.686-.161a3.942,3.942,0,0,1-2-.857,2.122,2.122,0,0,1-.568-1.57,3.091,3.091,0,0,1,.272-1.314,2.718,2.718,0,0,1,.781-.993,3.661,3.661,0,0,1,1.231-.629,5.482,5.482,0,0,1,1.6-.22,7.277,7.277,0,0,1,2.8.559l-1.035,2a3.583,3.583,0,0,0-1.663-.441,1.25,1.25,0,0,0-.687.169.522.522,0,0,0-.263.459.589.589,0,0,0,.042.246.438.438,0,0,0,.187.178,1.634,1.634,0,0,0,.425.153c.188.045.433.1.739.169a3.535,3.535,0,0,1,1.9.908,2.313,2.313,0,0,1,.628,1.671A3.024,3.024,0,0,1,898.625,190.853Zm6.043-4.241h-2.183v6.143h-3.072V181.436h3.072v2.614h2.183Zm3.663,6.143H905.26V184.05h3.072Zm.05-11.379a1.744,1.744,0,0,1-.373.552,1.764,1.764,0,0,1-.552.374,1.718,1.718,0,0,1-1.34,0,1.766,1.766,0,0,1-.926-.925,1.73,1.73,0,0,1,0-1.341,1.763,1.763,0,0,1,.926-.925,1.73,1.73,0,0,1,1.34,0,1.787,1.787,0,0,1,.552.373,1.76,1.76,0,0,1,.373.552,1.726,1.726,0,0,1,0,1.341Zm7.6,5.219a2.842,2.842,0,0,0-1.612-.544,2.185,2.185,0,0,0-.823.154,2.053,2.053,0,0,0-.671.432,1.974,1.974,0,0,0-.449.662,2.165,2.165,0,0,0-.162.856,2.118,2.118,0,0,0,.162.84,2.039,2.039,0,0,0,.441.662,1.94,1.94,0,0,0,.671.432,2.243,2.243,0,0,0,.831.153,2.539,2.539,0,0,0,1.612-.594v2.614a5.435,5.435,0,0,1-2.154.492,5.1,5.1,0,0,1-1.808-.322,4.527,4.527,0,0,1-2.554-2.367,4.4,4.4,0,0,1-.39-1.875,4.689,4.689,0,0,1,.374-1.893,4.512,4.512,0,0,1,1.018-1.476,4.6,4.6,0,0,1,1.535-.968,5.22,5.22,0,0,1,1.91-.347,4.581,4.581,0,0,1,2.069.475Zm-4.4-9.611-3.437-3.61v3.61H905V164.053h3.144v7.266l3.265-3.2h4.3l-4.439,4.094,4.715,4.767Zm4.4-19.839H909.2a1.806,1.806,0,0,0,2.019,2.019,1.612,1.612,0,0,0,1.541-.832h3.1c-.514,2.142-2.55,3.116-4.621,3.116-3.01,0-5.259-1.7-5.259-4.834,0-3.027,2.072-4.851,5.029-4.851,3.152,0,4.976,1.948,4.976,5.046Z" transform="translate(-648.911 -61.232)" fill="#f2e2c2"></path></g></svg>
                    </div>
                    <div onClick={handleMenu} className=''>
                        <MenuCrossIcons/>
                    </div>
                </div>
            </div>
            <div className='relative '>
            <div className='absolute h-screen w-screen bg-[#151414] menu_bg left-[100%] top-full flex flex-col pt-12 gap-2 tracking-tighter text-6xl uppercase p-4'>
                    {
                        data.map((el, ind) => (
                            <Link key={ind} to={el.link}>
                                <div className="overflow-hidden">
                                    <div className='menu_options text-[#F2E2C2] hover:ml-8 hover:text-[#F3C77C] transform duration-200 relative top-[3.5rem]'>
                                        <small className='text-xl pr-2 pl-2'>
                                            0{ind + 1}. &nbsp;
                                        </small>
                                        {el.name}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    <div className='text-sm tracking-normal absolute bottom-36'>
                        &copy;2025 &nbsp;
                        <a href="https://chessv.netlify.app" className='hover:underline lowercase'>
                            ChessV
                        </a> 
                        &nbsp;
                        <span className='lowercase'>
                            all rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideMenu