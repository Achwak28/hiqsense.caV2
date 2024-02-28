import { Avatar } from "@material-ui/core";

function Card(props) {
  return (
    <div className="main">
      <div className="Client-Card" style={{ display: "flex" }}>
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          className="avatar"
          src={props.avatar}
        />
        <p style={{ marginTop: 25 }}>
          <span>&ldquo;</span>
          {props.message}
        </p>
        <p>
          <span className="Name">
            {props.name} , {props.location}
          </span>
        </p>
        <p className="designation">
          <span>{props.designation}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
