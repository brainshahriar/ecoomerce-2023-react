import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex iusto
            quas aut esse a doloribus quos facere consequatur, amet nesciunt
            dolore ut voluptates dolorum temporibus consequuntur dolorem
            reprehenderit perferendis quo!
          </p>
          <div className="ctas">
            <div className="banner-cta">read more</div>
            <div className="banner-cta v2">shop now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
