import './App.css';
import UserList from "./components/UserList/UserList";

import users from './users.json';

function App() {
  return (
    <div className="App">
      <h1>GoIT test Tweets</h1>
      <UserList  items={users} />
    </div>
  );
}

export default App;
