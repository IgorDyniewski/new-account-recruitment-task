import React, { useState } from 'react'
import styled from 'styled-components'

// Input
const InputMainWrapper = styled.div`
    width: 100%;
    /* height: 100px; */
    /* border: 1px solid cyan; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`
const inputStyles = `
    border: none;
    width: 100%;
    height: 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    padding-left: 10px;
    :focus {
        outline: none;
    }
`
const Input = styled.input`
    ${inputStyles}
    color: ${(props) => (props.isError ? '#EB5757' : '#333333')};
`
const PlaceHolderText = styled.span`
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => (props.isActive ? '11px' : '16px')};
    line-height: 28px;
    margin-left: 10px;
    transform: ${(props) => (props.isActive ? 'translateY(-30px)' : 'translateY(0px)')};
    transition: transform 100ms ease-in, font-size 100ms ease-in;
    color: ${(props) => (props.isError ? '#EB5757' : '#333333')};
    pointer-events: none;
`
const MainBottomStripe = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.isError ? '#EB5757' : '#dadaed')};
    position: absolute;
    bottom: 0px;
    left: 0px;
`
const ActiveBottomStripe = styled.div`
    width: ${(props) => (props.isActive ? '100%' : '0%')};
    transition: width 200ms ease-in;
    height: 2px;
    background-color: #652ae6;
    position: absolute;
    bottom: 0px;
    left: 0px;
`
const ErrorText = styled.span`
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 28px;
    margin-left: 10px;
    transition: transform 100ms ease-in, opacity 100ms ease-in;
    transform: ${(props) => (props.isError ? 'translateY(0px)' : 'translateY(-12px)')};
    color: #eb5757;
    pointer-events: none;
    bottom: -27px;
    opacity: ${(props) => (props.isError ? 1 : 0)};
    min-width: 200px;
`

export const InputComponent = (props) => {
    // States
    const [isFocused, setIsFocused] = useState(false)

    return (
        <InputMainWrapper style={props.style}>
            <PlaceHolderText isActive={props.value.length > 0}>{props.placeholder}</PlaceHolderText>
            <Input
                {...props}
                placeholder={''}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{}}
                isError={props.isError}
            />
            <ErrorText isError={props.isError}>Invalid data</ErrorText>
            <MainBottomStripe isError={props.isError} />
            <ActiveBottomStripe isActive={isFocused} />
        </InputMainWrapper>
    )
}

export default InputComponent

// Select input
const Select = styled.select`
    ${inputStyles}
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='lightgray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;
`
const SelectMainWrapper = styled(InputMainWrapper)`
    @media (max-width: ${(props) => props.mobileMaxScreenWidth}px) {
        display: ${(props) => (props.onlyOnMobile ? 'block' : 'none')};
    }
    @media (min-width: ${(props) => props.mobileMaxScreenWidth}px) {
        display: ${(props) => (props.onlyOnDesktop ? 'block' : 'none')};
    }
`
export const SelectComponent = (props) => {
    // States
    const [isFocused, setIsFocused] = useState(false)

    return (
        <SelectMainWrapper {...props} style={props.style}>
            <PlaceHolderText isActive={true}>{props.label}</PlaceHolderText>
            <Select {...props} style={null} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
                {props.children}
            </Select>
            {!props.noBottomStripe && (
                <>
                    <MainBottomStripe />
                    <ActiveBottomStripe isActive={isFocused} />
                </>
            )}
            <ErrorText isError={props.isError}>
                {props.customErrorMessage ? props.customErrorMessage : 'Invalid data'}
            </ErrorText>
        </SelectMainWrapper>
    )
}
