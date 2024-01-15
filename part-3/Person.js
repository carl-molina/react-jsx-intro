"use strict";

function Person({name, age, hobbies}) {
  return (
    <div>
      <p>Learn some information about this person.</p>
      if ({age >= 18}) {
        <h3>please go vote!</h3>
      } else {
        <h3>you must be 18</h3>
      }
      <h2>Age: {age} </h2>
      if ({name.length > 8}) {
        <h2>Name: {name.slice(0, 6)}</h2>
      }

    <ul>
      {hobbies.map(h => <li>{h}</li>)}
    </ul>
    </div>
  );
}