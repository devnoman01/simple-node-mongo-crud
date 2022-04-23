import React from "react";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    // send data to server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
      });
  };
  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" required id="" />
        <br />
        <input type="email" name="email" placeholder="email" required id="" />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
