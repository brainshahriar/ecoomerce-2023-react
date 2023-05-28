import prod from "../../../assets/products/speaker-prod-1.webp";
import { MdClose } from "react-icons/md";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" placeholder="Search for products" autoFocus />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi adipisci atque deleniti delectus, quis odio ducimus
                consectetur amet animi veritatis, quas, libero illo laudantium
                eaque error magni molestias pariatur! Deserunt.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
