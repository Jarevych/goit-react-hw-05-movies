import { Outlet } from 'react-router-dom';
import { StyledAppHeader, StyledNavLink } from './SharedLayoutStyled';
import { Suspense } from 'react';
import { Dna } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <StyledAppHeader>
      <nav className="header-nav">
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies" end>
          Movie
        </StyledNavLink>
      </nav>

      <Suspense
        fallback={
          <div className="centered">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </StyledAppHeader>
  );
};
