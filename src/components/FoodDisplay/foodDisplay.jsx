import { useContext } from "react";
import "./foodDisplay.css";
import { storeContext } from "../../context/storeContext";
import FoodItem from "../FoodItem/foodItem";
const foodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);
  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
          
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            
          
          })}
        </div>
      </div>
    </div>
  );
};

export default foodDisplay;
