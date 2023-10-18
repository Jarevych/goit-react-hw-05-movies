import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  .input {
    display: flex;
    width: 292px;
    height: 40px;
    font-size: 24px;
    padding: 0;
    padding-left: 10px;
    border-radius: 8px;
    border: 1px solid #0056b3;
  }
  .form {
    position: absolute;
    top: 0;
    left: 50%;
    margin-top: 20px;
    transform: translate(-193px, 0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .searchbutton {
    display: flex;
    padding: 10px 20px;
    background-color: #b3b3ef;
    color: #000;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    height: 40px;
    font-weight: 700;

    &:hover {
      background-color: #9393da;
    }
  }
  .header {
    background-color: rgb(34, 75, 153);
  }
  .movielist {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
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
