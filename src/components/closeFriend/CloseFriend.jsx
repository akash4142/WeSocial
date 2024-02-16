import './closeFriend.css';

export default function closeFriend({user}) {
  return (
    <div>
      <div className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.ProfilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
          </div>
    </div>
  );
}
