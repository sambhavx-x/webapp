"use client";
import { get } from "http";
import React from "react";
import { useState } from "react";
import { useRef } from "react";


const Form = () => {
	const [selectedDate, setDate] = useState("");
	const [fromTime, setFromTime] = useState("");
	const [toTime, setToTime] = useState("");
	const [place, setPlace] = useState("");
	const uid = null;

	const handlePlace = (e) => {
		console.log('Label 👉️', e.target.selectedOptions[0].label);
		console.log(e.target.value);
		setPlace(e.target.value);
	};

	const submitHandler = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		var finalTo = null;
		var finalFrom = null;
		var toDate = new Date();
		var fromDate = new Date();
		if (fromTime > toTime) {
			fromDate = new Date(`${selectedDate}T${fromTime}`);
			var dateArr = selectedDate.split('-');
			const year1 = isNaN(parseInt(dateArr[0])) ? 0 : parseInt(dateArr[0]);
			const month1 = isNaN(parseInt(dateArr[1])) ? 0 : parseInt(dateArr[1]) - 1;
			const day1 = isNaN(parseInt(dateArr[2])) ? 1 : parseInt(dateArr[2]);
			const dateObj = new Date(year1, month1, day1);
			// console.log(dateObj);
			console.log(place);
			var nextDate = new Date(dateObj.getTime() + (24 * 60 * 60 * 1000));
			// console.log(nextDate);
			var year = nextDate.getFullYear();
			var month = (nextDate.getMonth() + 1).toString().padStart(2, '0');
			var day = nextDate.getDate().toString().padStart(2, '0');
			var nextDateStr = `${year}-${month}-${day}`;
			// console.log(nextDateStr);
			toDate = new Date(`${nextDateStr}T${toTime}`);
		} else {
			fromDate = new Date(`${selectedDate}T${fromTime}`);
			toDate = new Date(`${selectedDate}T${toTime}`);
		}
		finalTo = toDate.getTime();
		finalFrom = fromDate.getTime();
		// const checkRequest = await fetch("https://us-central1-tride-66c25.cloudfunctions.net/helloWorld/travel/check", {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify({
		// 		userid: uid
		// 	})
		// });
		const travelResponse = await fetch("https://us-central1-tride-66c25.cloudfunctions.net/helloWorld/travel/post", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				date: selectedDate,
				fromTime: finalFrom,
				toTime: finalTo,
				Destination: place
			}),
		});
		console.log(selectedDate);
		console.log(finalFrom);
		console.log(finalTo);
		const success = await travelResponse.json();

		if (success) {
			// navigate('/homepage')
			console.log("success");
		}
	};

	return (
		<>
			<div className="mx-auto">
				<div className="m-5 p-5 flex item-center justify-center ">
					<form action=""
						method="post"
						onSubmit={submitHandler}
						className="flex flex-col item-center justify-center">
						<input
							id="Date"
							placeholder="Date of Travel"
							onChange={(e) => setDate(e.target.value)}
							required
							type="date"
							className="block w-full px-4 py-2 mt-3 mb-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-blue focus:ring-1 focus:ring-indigo-500 sm:text-sm"></input>
						<input
							id="FromTime"
							placeholder="From Time"
							onChange={(e) => setFromTime(e.target.value)}
							required
							type="time"
							className="block w-full px-4 py-2 mt-3 mb-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-blue focus:ring-1 focus:ring-indigo-500 sm:text-sm"></input>
						<input
							id="ToTime"
							placeholder="To Time"
							onChange={(e) => setToTime(e.target.value)}
							required
							type="time"
							className="block w-full px-4 py-2 mt-3 mb-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-blue focus:ring-1 focus:ring-indigo-500 sm:text-sm" ></input>
						<select id="Place" value={place} name="Place" onChange={handlePlace} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-blue focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
							<option value="0">Campus &rarr; Airport</option>
							<option value="1">Airport &rarr; Campus</option>
							<option value="2">Campus &rarr; Railway Station</option>
							<option value="3">Railway Station &rarr; Campus</option>
						</select>
						<button
							type="submit"
							className="ml-auto mr-auto">
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Form;