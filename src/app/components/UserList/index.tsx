import React from "react";
import { getUserList, setUserProfil } from "../../utils/user";
import UserElement from "../UserElement";
import "./userList.css";

type typProps = {
  handleSetUser: (id: string) => void;
}

const UserList = (props: typProps) => {
  return (
    <div className="user-contaier">
      {getUserList.map((user) => (
        <UserElement
          setUserHandler={(id: string) => props.handleSetUser(id)}
          key={user.name + user.id}
          name={user.name}
          id={parseInt(user.id)}
          img={user.img}
        />
      ))}
    </div>
  );
};
export default UserList;
