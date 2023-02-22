import { getUser, setUser } from './localStorage'; 

type UserTyp = {
  id: string;
  name: string;
  img: string;
}

const userList = [
  { id: "1", name: "User 1", img: "https://randomuser.me/api/portraits/lego/1.jpg" },
  { id: "2", name: "User 2", img: "https://randomuser.me/api/portraits/lego/2.jpg" },
  { id: "3", name: "User 3", img: "https://randomuser.me/api/portraits/lego/3.jpg" },
  { id: "4", name: "User 4", img: "https://randomuser.me/api/portraits/lego/4.jpg" },
  { id: "5", name: "User 5", img: "https://randomuser.me/api/portraits/lego/5.jpg" },
];

const getUserData = (id: number | string) => {
  return userList.find( user => user.id == id);
}

const getUserId = (): string => {
  return getUser();
}

const getUserIdDirect = () => {
  return getUser();
}

const setUserProfil = async (userId: string): Promise<void> => {
  setUser(userId);
}

const getUserList: UserTyp[] = userList;

export { getUserData, getUserId, getUserList, setUserProfil, getUserIdDirect};