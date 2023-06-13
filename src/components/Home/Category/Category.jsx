import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return <div className="shop-by-category">
        <div className="categories">
            {!categories ? <div><h1>Please reload the page, wait for the APIs loading </h1></div> : categories?.data?.map((item)=>(
                <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                    <img src={item?.attributes?.img?.data?.attributes?.url} alt=""/>
                </div>
            ))}
            {/* <div className="category">
                <img src={cat2} alt="cat1"/>
            </div>
            <div className="category">
                <img src={cat3} alt="cat1"/>
            </div>
            <div className="category">
                <img src={cat4} alt="cat1"/>
            </div> */}
        </div>
    </div>;
};

export default Category;
