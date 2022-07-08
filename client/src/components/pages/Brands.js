import { useContext } from "react";
import UserContext from "../../context/userContext.js";

const user = {
    id: 5555,
    username: "sreeepotluri"
}

const Brands = (props) => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>{user.username} Favorite Brands</h2>
            <ul id="brandList">
                { props.brands.map((brand) =>
                  <li key={brand.id}>{brand.title}</li>
                ) }
            </ul>
        </div>
    );
}

export default Brands;