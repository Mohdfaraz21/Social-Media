import "./online.css";

export default function Online({user}) {
    return (
        <li className="RightbarFriend">
            <div className="RightbarProfileContainer">
                <img src={user.profilePicture} alt="" className="RightbarProfileImg" />
                <span className="RightbarOnline"></span>
            </div>
            <span className="RightbarUsername">{user.username}</span>
        </li>
    )
}