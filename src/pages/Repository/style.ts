import styled from 'styled-components';

export const RepositoryInfo = styled.section`
margin-top: 80px;
header {
    display: flex;
    align-items: center;
    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;        
    }
    div {
        margin-left: 24px;
        strong {
            font-size: 36px;
            color: #3d3d43;            
        }
        p {
            font-size: 18px;
            color: #737380;
            margin-top: 4px;
        }
    }
}

ul {
    max-width: 50%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 40px;
li {
    a + li {
        margin-left: 80px;        
    }
    strong {        
        display: block;
        font-size: 36px;
        color: #3d3d4d
    }
    span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
    }
  }
}
`;

export const Issues = styled.div`
margin-top: 80px;
a {
  background: ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  & + a {
      margin-top: 16px;
  }
  &:hover {
      transform: translateX(10px);
  }
  div {
      margin: 0 16px;
      flex: 1;
      strong {
          font-size: 20px;
          color: ${({theme}) => theme.colors.text};
      }
      p {
          font-size: 18px;
          color: ${({theme}) => theme.colors.text};
          margin-top: 4px;
      }
  }
  svg {
      margin-left: auto; 
      color: ${({theme}) => theme.colors.text};
  }
}
`;