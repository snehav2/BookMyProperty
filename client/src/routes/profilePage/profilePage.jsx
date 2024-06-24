import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
//import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
//import { Suspense, useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  //const data = useLoaderData();

  //const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res=apiRequest.post("/auth/logout");
      localStorage.removeItem("user")
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="/sneha.jpg"
                alt=""
              />
            </span>
            <span>
              Username: <b>Sneha Verma</b>
            </span>
            <span>
              E-mail: <b>snehaverma0201@gmail.com
              </b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
