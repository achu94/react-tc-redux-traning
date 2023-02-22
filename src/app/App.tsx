import React, { useState, useEffect } from "react";
import PostCreator from "./components/PostCreator";
import PostList from "./components/PostsList";
import { getUserId } from "./utils/user";
import UserList from "./components/UserList";
import { setUserProfil } from "./utils/user";

import "./App.css";

function App() {
  useEffect(() => {
    (async () => {
      const userid = getUserId();
      setUser(userid);
    })();
  }, []);

  const handleSetUser = (id: string) => {
    setUserProfil(id);
    setUser(id);
  };

  const handleLogOut = () => {
    setUserProfil("");
    setUser("");
  };

  const [user, setUser] = useState<string | null>();

  return (
    <div className="App">
      {user ? (
        <>
          <div style={{textAlign: 'right'}}>
            <button onClick={() => handleLogOut()}>Logout</button>
          </div>
          <PostCreator /> <PostList />
        </>
      ) : (
        <UserList handleSetUser={handleSetUser} />
      )}
    </div>
  );
}

export default App;
