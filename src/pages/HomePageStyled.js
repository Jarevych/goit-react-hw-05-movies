import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  .searchbutton {
    position: absolute;
    height: 38px;
    background: none;
    border: none;
  }
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
  .page-title {
    text-align: center;
  }
`;