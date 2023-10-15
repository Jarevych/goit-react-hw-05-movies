import { NavLink } from "react-router-dom"

export const Header = () => {

    return (
        <div>
            <nav>
            <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movie" end>
          Movie
        </NavLink>
                
            </nav>

        </div>
    )
}