"use client";
import React from "react";
import { useState } from "react";

const Form = () => {
  const [selectedDate, setDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    var finalTo = null;
    var finalFrom = null;
    var toDate = new Date();
    var fromDate = new Date();
    if (fromTime > toTime) {
      fromDate = new Date(`${selectedDate}T${fromTime}`);
      toDate = new Date(`${selectedDate + 1}T${toTime}`);
    } else {
      fromDate = new Date(`${selectedDate}T${fromTime}`);
      toDate = new Date(`${selectedDate}T${toTime}`);
    }
    finalTo = toDate.getTime();
    finalFrom = fromDate.getTime();
    const travelResponse = await fetch(
      "https://us-central1-tride-66c25.cloudfunctions.net/helloWorld/travel/post",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          fromTime: finalFrom,
          toTime: finalTo,
        }),
      }
    );
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
        <div className="m-5 p-5 flex item-center justify-center">
          <form
            action=""
            method="post"
            onSubmit={submitHandler}
            className="flex-col item-center justify-center"
          >
            <input
              id="Date"
              placeholder="date"
              onChange={(e) => setDate(e.target.value)}
              required
              type="date"
              className="w-2/3 ml-auto mr-auto rounded-lg mt-10 mb-10 h-16"
            ></input>
            <input
              id="FromTime"
              placeholder="time"
              onChange={(e) => setFromTime(e.target.value)}
              required
              type="time"
              className="w-2/3 ml-auto mr-auto rounded-lg mb-5 h-16"
            ></input>
            <input
              id="ToTime"
              placeholder="time"
              onChange={(e) => setToTime(e.target.value)}
              required
              type="time"
              className="w-2/3 ml-auto mr-auto rounded-lg mb-5 h-16"
            ></input>
            <button
              type="submit"
              className="bg-blue-600 w-20 h-8 ml-auto mr-auto rounded-lg active:bg-blue-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
