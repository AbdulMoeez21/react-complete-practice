import React, { useState } from "react";

function SimpleForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    em: "",
  });

  
  const inputEvent = (event) => {
    console.log(event.target.value);
    const {name, value}=event.target
    setuser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submt = (event) => {
    event.preventDefault();
    setIsSubmit(true);
  };
  return (
    <>
      <form onSubmit={submt}>
        {/* if submit true render H1 else nothing */}
        {isSubmit && (
          <h1>
            {`Hello ${user.fname + user.lname} & yor Email address is ${
              user.em
            }`}{" "}
          </h1>
        )}
        <input
          type="text"
          style={{ padding: "11px", margin: "10px" }}
          placeholder="Enter Your First Name"
          name="fname"
          onChange={inputEvent}
          //   onChange={(e) => {
          //     setuser({ ...user, fname: e.target.value });
          //   }}
          value={user.fname}
        />
        <input
          type="text"
          style={{ padding: "11px", margin: "10px" }}
          placeholder="Enter Your Last Name"
          name="lname"
          onChange={inputEvent}
          //   onChange={(e) => {
          //     setuser({ ...user, lname: e.target.value });
          //   }}
          value={user.lname}
        />
        <input
          type="email"
          style={{ padding: "11px", margin: "10px" }}
          placeholder="Enter Your Email Address"
          name="em"
          onChange={inputEvent}
          value={user.em}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default SimpleForm;
