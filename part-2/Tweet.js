"use strict";

function Tweet({username, name, date, message}) {

  const myStyles = {
    color: "red",
    backgroundColor: "green"
  }

  return (<div className={username}>
    <h1 style={myStyles}>Username: { username }</h1>
    <h3>Name: { name }</h3>
    <p>Date: { date }</p>
    <p>Message: { message }</p>
  </div>
  )
}