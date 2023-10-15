import { NavLink } from "react-router-dom"
import { StyledAppHeader } from './HeaderStyled'

export const Header = () => {

    return (
        <StyledAppHeader>
            <nav className="header-nav">
            <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movie" end>
          Movie
        </NavLink>
                
            </nav>

        </StyledAppHeader>
    )
}