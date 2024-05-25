import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};

const userData = [vinhData,myData];
// TODO Edit the User component code to be able to display DIFFERENT users !
export function User(props) {
  const {user} = props;
  return (
    <div id="user" data-testid="user">
      <h2>{user.firstName + user.lastName}</h2>
      <p>{user.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      {userData.map((user, index)=>
        <User key={index} user={user} />
      )}
    </div>
  );
}

export default App;
