import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image1Animated from './Image1Animated';
import Image2Animated from "./Image2Animated";

gsap.registerPlugin(ScrollTrigger);

const ImageHoverAnimation = () => {
  const [img1Hovered , setImg1Hovered] = useState(false);
  const [img2Hovered , setImg2Hovered] = useState(false);
  const div1Ref = useRef();
  const div2Ref = useRef();

  return (
    <>
    <div className='min-h-screen text-8xl relative max-md:flex max-md:flex-col max-md:items-center text-white grid grid-cols-3'>
      <div ref={div1Ref} className='col-span-2 relative h-fit w-fit p-12'>
        <Image1Animated div1Ref={div1Ref} img1Hovered={img1Hovered} setImg1Hovered={setImg1Hovered} />
      </div>
      <div ref={div2Ref} className='col-span-1 absolute max-md:relative bottom-0 right-0 h-fit w-fit p-12'>
        <Image2Animated div2Ref={div2Ref} img2Hovered={img2Hovered} setImg2Hovered={setImg2Hovered} />
      </div>
      <div className='absolute bottom-0 w-full flex justify-center items-center text-sm text-neutral-500 '>
        <span className='absolulte top-1 text-2xl'>*</span>Tap the image to explore more!
      </div>
    </div>
    </>
  )
}

export default ImageHoverAnimation