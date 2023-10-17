import { NavLink, Outlet } from 'react-router-dom';
import { StyledAppHeader } from './SharedLayoutStyled';
import { Suspense } from 'react';
import { Dna } from 'react-loader-spinner';

export const SharedLayout = () => {
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

      <Suspense
        fallback={
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        }
      >
        <Outlet />
      </Suspense>
    </StyledAppHeader>
  );
};
