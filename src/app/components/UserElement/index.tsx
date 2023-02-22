import "./userElement.css";

type userData = {
  id: number;
  name: string;
  img?: string;
  setUserHandler: (id: string) => void;
};

const UserElement = (props: userData) => {
  return (
    <span className="user-element"  onClick={() => props.setUserHandler(JSON.stringify(props.id))}>
      <div>
        <img className="user-image" src={props.img} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </span>
  );
};

export default UserElement;
