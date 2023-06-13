import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        We do not make money from sales. We make money from helping customers make shopping decisions.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={() => navigate(`/`)}>Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="Banner" />
            </div>
        </div>
    )
};

export default Banner;
