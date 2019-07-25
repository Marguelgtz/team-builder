import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Member from "./components/Member";

function App() {
  const [members, setMembers] = useState([]);

  const addMember = member => setMembers([...members, member]);

  const updateMember = uMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === uMember.id) {
          return uMember;
        }
        return member;
      })
    ]);

  console.log("members", members);
  return (
    <div className="App">
      <h1>App</h1>
      {members.map(member => (
        <Member member={member} updateMember={updateMember} />
      ))}
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
