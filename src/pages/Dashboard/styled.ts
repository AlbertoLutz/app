import { shade } from 'polished';
import styled from 'styled-components'

type FormProps = {
    hasError: boolean;
}

export const Title = styled.h1`
font-size: 48px;
color: ${({theme}) => theme.colors.text};
margin-top: 80px;
max-width: 700px;
line-height: 56px;
`;

export const Form = styled.form<FormProps>`
margin-top: 40px;
max-width: 700px;
display: flex;

input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.primary};
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-right: 0;

    ${({hasError}) => 
    hasError &&
    css`
    border-color: #c53030;
    `}

    &::placeholder {
        color: ${({theme}) => theme.colors.details};
    }
}

button{
    width: 210px;
    height: 70px;
    background: ${({theme}) => theme.colors.secundary};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${({theme}) => theme.colors.primary};
    font-weight: bold;
    transition: 400ms;

    &:hover {
        background: ${({theme}) => shade(0.2, theme.colors.secundary)};       
    }
}
`;

export const Error = styled.span`
display: block;
color: #c53030;
margin-top: 8px;
`;

export const Repositories = styled.div`
margin-top: 80px;
max-width:700px;
a {
    background: ${({theme}) => theme.colors.primary};
    border-radius: 5px;
    width: 100%;
    padding:74px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
        margin-top:16px;
    }
    &:hover {
        transform: translateX(10px);        
    }
    img {
        width: 64px;
        height: 64px;;
        border-radius: 50px;
    }
    div{
        margin: 0 16px;
        flex: 1;
        strong{
            font-size: 20px;
            color: ${({theme}) => theme.colors.text};
            font-family: ${({theme}) => theme.fonts.primary};
        }
        p {
            font-size: 18px;
            color: ${({theme}) => theme.colors.details};
            font-family: ${({theme}) => theme.fonts.primary};
            margin-top: 4px;
        }
        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
}
`;