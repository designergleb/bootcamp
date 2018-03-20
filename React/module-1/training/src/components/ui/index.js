import React, {Component} from 'react';
import styled from 'styled-components';
import {excludeProp} from "../../utils";

export const Button = styled.button`
    background-image: -moz-linear-gradient( -10deg, rgb(222,255,201) 0%, rgb(163,248,255) 100%);
    background-image: -webkit-linear-gradient( -10deg, rgb(222,255,201) 0%, rgb(163,248,255) 100%);
    background-image: -ms-linear-gradient( -10deg, rgb(222,255,201) 0%, rgb(163,248,255) 100%);
    height: 50px;
    width: 100%;
    max-width: 480px;
    text-transform:uppercase;
    border: none;
    font-family: inherit;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.14em;
`;

const InputWrapper = styled.div`
    margin-bottom: 5px;
    width: 100%;
    height: 60px;
    max-width: 480px;
    background-color: #ffffff;
    font-family: Chivo, sans-serif;
    display: flex;
    &::before, &::after {
      width: 60px;
      content: '';
      background-image: url(${props => props.image ? props.image : ''});
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: center;
    }
    &::after {
      background-image: url(${props => props.image2 ? props.image2 : ''});
    }
    
`;
const Input = styled.input`
    letter-spacing: 0.04em;
    height: 100%;
    width: 100%;
    border: none;
    &:focus{
      outline: none;
    }
    &::placeholder{
      color: #333;
      opacity: 1;
    }
`;
export const TextInput = (props) => {
    console.log('props', props);
    return (
        <InputWrapper image={props.image} image2={props.image2}>
            <Input {...excludeProp(props, 'image', 'image2')} />
        </InputWrapper>
    )
};

export const ErrorMessage = styled.div`
    display: ${props => props.visible ? 'block' : 'none'}
    background-color: #fff;
    text-align: center;
    font-family:Chivo, sans-serif;
    font-weight: bold;
    color: #f00;
    text-transform:uppercase;
`;
