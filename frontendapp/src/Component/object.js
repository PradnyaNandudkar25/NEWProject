
import React, { useState } from 'react';

function Person(name, age, email, city) {
  this.name = name;
  this.age = age;
  this.email = email;
 
}

function Object() {
  const person = new Person("Pradnya", 22, "pradnya@gmail.com", "Mumbai");

  const [user, setUser] = useState(person);

  return (
    <div className="container mt-3">
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}
export default Object;
