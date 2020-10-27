import React from 'react'
import styled from 'styled-components'

// Styled components
const Wrapper = styled.div`
    /* border: 2px solid red; */
    width: 60px;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`
const MainRectangle = styled.div`
    border: 3px solid ${(props) => (props.isActive ? '#1BFEC0' : '#dadaed')};
    transition: border 200ms ease-in;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SmallRectangle = styled.div`
    border: 3px solid ${(props) => (props.isActive ? '#1BFEC0' : '#dadaed')};
    transition: border 200ms ease-in;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -7.5px;
    background-color: white;
`
const Text = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #333333;
    text-align: center;
    margin-right: 3.75px;
    pointer-events: none;
`
const ActiveSmallestRectangle = styled.div`
    width: 3px;
    height: 3px;
    background-color: #1bfec0;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transition: opacity 200ms ease;
`

const BoxSelect = (props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <MainRectangle isActive={props.isActive}>
                <Text>{props.children}</Text>
            </MainRectangle>
            <SmallRectangle isActive={props.isActive}>
                <ActiveSmallestRectangle isActive={props.isActive} />
            </SmallRectangle>
        </Wrapper>
    )
}

export default BoxSelect
