import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Perfect Home: Buy, Rent, and Live Better</h1>
          <p className="para">
          Welcome to BookMyProperty, your ultimate property search tool. Buy or rent with ease using our intuitive search, chat with property owners, explore neighborhoods with our interactive map, create posts effortlessly, and save your favorite listings.
         </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>User friendly</h1>
              <h2>with chat feature</h2>
            </div>
            <div className="box">
              <h1>Sorting</h1>
              <h2>property at your ease</h2>
            </div>
            <div className="box">
              <h1>Map facility</h1>
              <h2>for better view</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/client/public/build.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;