import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";
const exploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam fuga
          pariatur, aspernatur sapiente alias vero soluta eos praesentium
          explicabo odit.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
                <div onClick={() => {
                    setCategory(prev=>prev===item.menu_name?"All":item.menu_name)
              }} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?'active':" "} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default exploreMenu;
