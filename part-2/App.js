"use strict";

function App() {
  return (
    <div>
      <Tweet username="carluser"
        name="carl"
        date={ new Date().toDateString() }
        message="test message" />
      <Tweet username="charlesuser"
        name="charles"
        date={ new Date().toDateString() }
        message="test message 2" />
      <Tweet username="test"
        name="testname"
        date={ new Date().toDateString() }
        message="test message 3" />
    </div>
  )
}