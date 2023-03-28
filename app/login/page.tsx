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
		<section className='p-10 h-full flex flex-col items-center justify-center'>
			<div className="ball b1"></div>
			<div className="ball b2"></div>
			<img src="svg.svg" alt="" className='h-28 w-auto mt-20 mb-0' />
			<div className='mx-auto h-full p-10 flex flex-col items-center justify-center'>
				<h1 className='text-8xl mb-5 font-bold text-white'>Sign in</h1>
				<button>
					<img src="G.svg" alt="" className='w-5 h-auto mr-3' />
					Continue with Google
				</button>
			</div>
		</section>
	)
}
export default Form;