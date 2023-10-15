import styled from 'styled-components';

export const StyledAppContainer = styled.div`
 
.input{
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
  margin-top: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchbutton {
  display: flex;
  padding: 10px 20px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  height: 40px;

  &:hover {
    background-color: #0056b3;
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
    flex-direction: column
  }
  .movietitle {
    max-width: 250px;
  }
  .page-title {
    text-align: center;  }
`;


