import "./Category.scss";
const Category = ({ categories }) => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.map((category, index) => {
          return (
            <div className="category" key={index}>
              <img src={`http://localhost:8000/storage/${category.image}`} alt="" />
              <h3>{category.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
