import styled from 'styled-components';

export const StyledCastContainer = styled.div`
  .movielist {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 0;
  }
  .movieitem {
    display: flex;
    flex-direction: column;
  }
  .movietitle {
    max-width: 250px;
  }
  .cast-name {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    font-family: monospace;
  }
  .cast-image {
    max-width: 320px;
    display: flex;
  }
`;
