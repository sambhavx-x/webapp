"use client"
import React from 'react'
import { useState, useRef } from 'react';

const Form = () => {

	const email = useRef();
	const emailr = useRef();
	const password = useRef();
	const passwordr = useRef();
	const firstName = useRef();
	const lastName = useRef();

	return (
		<section className='p-2 sm:p-10 h-full flex flex-col items-center justify-center'>
			<div className="ball b1 w-[7	0vw] sm:w-[40vw] md:w-[30vw] lg:w-[18vw]"></div>
			<div className="ball b2 w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[10vw]"></div>
			<img src="svg.svg" alt="" className='h-[12.5%] mb:h-[20%] sm:h-[25%] w-auto mt-[30vh] sm:mt-[20vh] md:mt-[15vh] mb-[10vh] sm:mb-0' />
			<div className='mx-auto h-full p-2 md:p-10 flex flex-col justify-start text-center sm:items-center sm:ustify-center'>
				<h1 className='text-6xl sm:text-7xl md:text-8xl mb-10 font-bold text-white '>Sign in</h1>
				<button>
					<img src="G.svg" alt="" className='w-5 h-auto mr-3' />
					Continue with Google
				</button>
			</div>
		</section>
	)
}
export default Form;