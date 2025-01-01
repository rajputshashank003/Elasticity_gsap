import { useGSAP } from '@gsap/react';
import { IconArrowRight } from '@tabler/icons-react';
import { useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bg_images_url } from './backgroundImges';

gsap.registerPlugin(ScrollTrigger);
const Image1Animated = ({img1Hovered , setImg1Hovered}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const par2Ref = useRef();

    const handleMouseEnter1 = (e) => {
      setImg1Hovered(true);
      const bound = par2Ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - bound.left);
      mouseY.set(e.clientY - bound.top);

      gsap.to(".div1", {
        scale : 0.95,
        duration : 0.4
      })
      gsap.to(".img1", {
        y : 0,
        scale : 1.15,
        duration : 0.4
      })
      gsap.to(".hover1", {
        opacity : 1,
        x : mouseX.current,
        y : mouseY.current
      })
    }
    const handleMouseLeave1 = () => {
      setImg1Hovered(false);
      gsap.to(".div1", {
        scale : 1,
        duration : 0.4
      })
      gsap.to(".img1", {
        scale : 1,
        duration : 0.4
      })
      gsap.to(".hover1", {
        opacity : 0,
      })
    }
  
    useGSAP(() => {
      gsap.to(".img1", {
        y : -35,
        scale : 1.04,
        scrollTrigger : {
          trigger : ".div1",
          start : "top 80%",
          end : "top -100%",
          scrub : 3,
        }
      })
    })

    return (
        <Link ref={par2Ref} to={"https://chessv.netlify.app"}>
            <div className={`absolute z-[9] rounded-full h-[4rem] w-[4rem] opacity-0 text-4xl bg-[#151414] p-2 text-white hover1 ${img1Hovered && "pointer-events-none"}`}>
                <IconArrowRight className='h-full w-full'/>
            </div>
            <div 
                onMouseMove={(e) => handleMouseEnter1(e)} 
                onMouseLeave={handleMouseLeave1} 
                style={{ backgroundImage: `url(${bg_images_url[0]})` }}
                className={`div1 h-[47vw] w-[50vw] max-md:h-[60vw] max-md:w-[64vw] flex justify-center bg-cover items-center rounded-lg`}
                >
                <img 
                className='img1 h-[35vw] w-[35vw] max-md:h-[40vw] max-md:w-[40vw] object-cover rounded-lg'
                // src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
                src='https://github.com/rajputshashank003/Chess.v.0.2.1/blob/main/image.png?raw=true'
                />
            </div>
            <div className='text-2xl font-brandium'>
                ChessV
                <br />
                <span className='text-sm text-neutral-400'>
                Online chess game 
                </span>
            </div>
        </Link>
    )
}

export default Image1Animated