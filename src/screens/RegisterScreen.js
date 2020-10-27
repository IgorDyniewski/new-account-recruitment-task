import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import InputComponent, { SelectComponent } from '../components/Input'
import BoxSelect from '../components/BoxSelect'

// Lib
import phoneCodes from '../lib/phoneCodes.json'
import months from '../lib/months.json'

// Styled components
const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #242424;
    position: relative;
    overflow-y: scroll;
    box-sizing: border-box;
    overflow-x: hidden;
`
const Gradient = styled.div`
    width: 800px;
    height: 800px;
    background-image: url('/gradient.svg');
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px solid red; */
    position: fixed;
`
const ContentWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    /* border: 1px solid red; */
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 100px;
    box-sizing: border-box;
`
const Title = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 50px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (max-width: 600px) {
        font-size: 40px;
    }
    @media (max-width: 350px) {
        font-size: 30px;
    }
`
const Content = styled.div`
    width: 960px;
    /* border: 2px solid red; */
    display: flex;
    position: relative;
    flex-direction: row;
    @media (max-width: 991px) {
        width: calc(100vw - 40px);
    }
`
const FarLeftGraphic = styled.div`
    background-image: url('/metro-bg.png');
    background-size: cover;
    background-position: center;
    /* height: 100%; */
    width: 300px;
    /* border: 1px solid blue; */
    position: relative;
    display: flex;
    flex: 1;
    @media (max-width: 991px) {
        display: none;
    }
`
const FarLeftGraphicTintWithLines = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(32, 32, 32, 0.75);
    /* border: 1px solid blue; */
`
const FarLeftGraphicLines = styled.div`
    width: calc(100% - 12px); // Wired offset from Figma
    float: right;
    height: 100%;
    background-image: url('/lines.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`
const RegisterFormPadding = 50
const RegisterForm = styled.form`
    width: calc(100% - 300px);
    height: 100%;
    background-color: transparent;
    display: block;
    color: black;
    padding-left: ${RegisterFormPadding}px;
    padding-top: ${RegisterFormPadding}px;
    padding-bottom: ${RegisterFormPadding}px;
    padding-bottom: ${'calc(' + RegisterFormPadding + 'px + 25px)'};
    box-sizing: border-box;
    position: relative;
    @media (max-width: 991px) {
        width: 100%;
        padding: 65px;
        padding-bottom: calc(65px + 25px);
    }
    @media (max-width: 550px) {
        padding: 45px;
        padding-bottom: calc(45px + 25px);
    }
    @media (max-width: 410px) {
        padding: 35px;
        padding-bottom: calc(35px + 25px);
    }
    @media (max-width: 350px) {
        padding: 20px;
        padding-bottom: calc(20px + 25px);
    }
`
const WhiteBackground = styled.div`
    position: absolute;
    background-color: white;
    height: 100%;
    top: 0px;
    left: 0px;
    width: calc(100% - 80px);
    z-index: 0;
    @media (max-width: 991px) {
        width: 100%;
    }
`
const Row = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    z-index: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
    /* display: block; */
`
const RowMain = styled.div`
    display: block;
    width: ${'calc(100% - 80px - ' + RegisterFormPadding + 'px)'};
    /* border: 1px solid blue; */
    @media (max-width: 991px) {
        width: 100%;
    }
`
const RowSideIndicatorsWrapper = styled.div`
    /* border: 1px solid red; */
    width: 80px;
    min-height: 100%;
    position: absolute;
    right: 0px;
    @media (max-width: 991px) {
        display: none;
    }
`
const GreenLine = styled.div`
    background-color: #1bfec0;
    width: 100px;
    height: 3px;
    position: absolute;
    z-index: 3;
    left: ${RegisterFormPadding}px;
    top: -1.5px;
    @media (max-width: 991px) {
        left: 60px;
    }
    @media (max-width: 550px) {
        left: 30px;
    }
    @media (max-width: 410px) {
        left: 20px;
    }
`
const SubTitle = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.279779px;
    font-size: 13.9904px;
    font-size: 15px;
    line-height: 24px;
    color: #202020;
`
const RowSideIndicatorsMain = styled.div`
    color: white;
    /* border: 1px solid magenta; */
    height: 80px;
    width: 80px;
    position: absolute;
    top: 50px;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`
const RowSideIndicatorLine = styled.div`
    height: 2px;
    width: 35px;
    margin-left: -10px;
    background-color: ${(props) => (props.isActive ? '#1bfec0' : 'rgba(255,255,255,0.25)')};
`
const RowSideIndicatorText = styled.span`
    margin-top: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
`
const PhoneNumberRow = styled.div`
    display: flex;
    align-items: center;
`
const SmallLabel = styled.span`
    font-size: 11px;
    color: #333333;
    margin-left: 10px;
`
const ChessSelectWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const BirthDateSeparator = styled.div`
    min-width: 10px;
    height: 2px;
    background-color: #dadaed;
    margin-left: 10px;
    margin-right: 10px;
`
const ContinueButtonArrowWrapper = styled.div`
    width: 50px;
    height: 50px;
    background-color: #7841f4;
    background-image: url('/arrow.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 35%;
    transition: transform 200ms ease;
`
const ContinueButtonMain = styled.button`
    z-index: 3;
    width: 240px;
    height: 50px;
    border: none;
    background-color: red;
    box-shadow: 0px 20px 25px rgba(32, 31, 54, 0.15);
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12.0061px;
    border: 0px;
    padding: 0px;
    display: flex;
    cursor: pointer;
    :focus {
        outline: none;
    }

    position: absolute;
    bottom: -25px;
    right: 30px;
    @media (max-width: 600px) {
        position: absolute;
        left: calc(50% - 120px);
        bottom: -25px;
    }
    transition: transform 200ms ease;
    :hover {
        transform: translateX(20px);
    }
    &:hover ${ContinueButtonArrowWrapper} {
        transform: scale(1.2);
    }
`
const ContinueButtonGradient = styled.div`
    border: none;
    background: linear-gradient(90deg, #8658eb -0.42%, #652ae6 100.42%);
    height: 50px;
    width: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RegisterScreen = () => {
    // States
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phonePrefix, setPhonePrefix] = useState('PL')
    const [canPlayChess, setCanPlayChess] = useState(false)
    const [birthDay, setBirthDay] = useState(1)
    const [birthMonth, setBirthMonth] = useState(1)
    const [birthYear, setBirthYear] = useState(new Date().getFullYear())

    // Errors
    const [nameError, setNameError] = useState(false)
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const [isUnder18, setIsUnder18] = useState(false)

    // Preparing phone codes
    let phoneCodesArr = []
    for (const country in phoneCodes) phoneCodesArr.push({ countryCode: country, prefix: phoneCodes[country] })

    // Preparing 31 days
    let availableDays = []
    for (let i = 1; i < 32; i++) availableDays.push(<option key={i}> {String(i).length === 1 ? `0${i}` : i}</option>)

    // Preparing Years
    let availableYears = []
    for (let i = 1920; i <= new Date().getFullYear(); i++) availableYears.push(<option key={i}>{i}</option>)

    // On form submit
    const _onFormSubmit = (e) => {
        e.preventDefault()

        // Test logic
        let isFromValid = true
        if (fullName.length < 3) {
            isFromValid = false
            setNameError(true)
        }

        // Phone number test
        if (phoneNumber.replace(/\D/g, '').length !== 9 || phoneNumber.replace(/[\d\s]/g, '').length > 0) {
            setPhoneNumberError(true)
            isFromValid = false
        }

        // BirthDateCheck
        let userBirthDate = new Date()
        let dateNow = new Date()
        userBirthDate.setFullYear(birthYear)
        userBirthDate.setMonth(birthMonth - 1)
        userBirthDate.setDate(birthDay)
        userBirthDate.setHours(0, 0, 0, 0)

        if (new Date(dateNow - userBirthDate).getFullYear() - 1970 < 18) {
            isFromValid = false
            setIsUnder18(true)
        }

        if (isFromValid) console.log('Success')
    }

    return (
        <>
            <Main>
                <Gradient />
                <ContentWrapper>
                    <Title>Your account</Title>
                    <Content>
                        <FarLeftGraphic>
                            <FarLeftGraphicTintWithLines>
                                <FarLeftGraphicLines />
                            </FarLeftGraphicTintWithLines>
                        </FarLeftGraphic>
                        <RegisterForm onSubmit={(e) => _onFormSubmit(e)}>
                            <GreenLine />
                            <WhiteBackground />
                            <Row>
                                <RowMain>
                                    <SubTitle>
                                        Provide personal information so that we can create a new account for you.
                                    </SubTitle>
                                </RowMain>
                                <RowSideIndicatorsWrapper>
                                    <RowSideIndicatorsMain>
                                        <RowSideIndicatorLine />
                                        <RowSideIndicatorText>01</RowSideIndicatorText>
                                        {/* <RowSideIndicatorText>Personal</RowSideIndicatorText> */}
                                    </RowSideIndicatorsMain>
                                </RowSideIndicatorsWrapper>
                            </Row>
                            <Row style={{ marginTop: '50px' }}>
                                <RowMain>
                                    <InputComponent
                                        value={fullName}
                                        onChange={(e) => {
                                            setNameError(false)
                                            setFullName(e.target.value)
                                        }}
                                        placeholder={'Your name'}
                                        isError={nameError}
                                    />
                                </RowMain>
                                <RowSideIndicatorsWrapper>
                                    <RowSideIndicatorsMain>
                                        <RowSideIndicatorLine isActive={true} />
                                        <RowSideIndicatorText>02</RowSideIndicatorText>
                                        <RowSideIndicatorText>Personal</RowSideIndicatorText>
                                    </RowSideIndicatorsMain>
                                </RowSideIndicatorsWrapper>
                            </Row>
                            <Row style={{ marginTop: '50px' }}>
                                <RowMain>
                                    <PhoneNumberRow>
                                        <SelectComponent
                                            value={phonePrefix}
                                            onChange={(e) => setPhonePrefix(e.target.value)}
                                            label={'Mobile'}
                                            style={{ width: '180px' }}
                                        >
                                            {phoneCodesArr.map((phoneCodeObj, index) => (
                                                <option
                                                    value={phoneCodeObj.countryCode}
                                                    key={index}
                                                >{`+${phoneCodeObj.prefix} (${phoneCodeObj.countryCode})`}</option>
                                            ))}
                                        </SelectComponent>
                                        <InputComponent
                                            value={phoneNumber}
                                            onChange={(e) => {
                                                setPhoneNumber(e.target.value)
                                                setPhoneNumberError(false)
                                            }}
                                            style={{ marginLeft: '20px' }}
                                            isError={phoneNumberError}
                                        />
                                    </PhoneNumberRow>
                                </RowMain>
                                <RowSideIndicatorsWrapper>
                                    <RowSideIndicatorsMain>
                                        <RowSideIndicatorLine />
                                        <RowSideIndicatorText>03</RowSideIndicatorText>
                                    </RowSideIndicatorsMain>
                                </RowSideIndicatorsWrapper>
                            </Row>
                            <Row style={{ marginTop: '50px' }}>
                                <RowMain>
                                    <SmallLabel>Can you play chess?</SmallLabel>
                                    <ChessSelectWrapper>
                                        <BoxSelect isActive={canPlayChess} onClick={() => setCanPlayChess(true)}>
                                            Yes
                                        </BoxSelect>
                                        <BoxSelect isActive={!canPlayChess} onClick={() => setCanPlayChess(false)}>
                                            No
                                        </BoxSelect>
                                    </ChessSelectWrapper>
                                </RowMain>
                            </Row>
                            <Row style={{ marginTop: '50px' }}>
                                <RowMain>
                                    <SmallLabel>Date of birth</SmallLabel>
                                    <PhoneNumberRow style={{ marginTop: '10px' }}>
                                        {/* Day */}
                                        <SelectComponent
                                            noBottomStripe
                                            value={birthDay}
                                            onChange={(e) => {
                                                setIsUnder18(false)
                                                setBirthDay(e.target.value)
                                            }}
                                            default={1}
                                            label={''}
                                            style={{ minWidth: '50px', maxWidth: '50px', border: '2px solid #dadaed' }}
                                            isError={isUnder18}
                                            customErrorMessage={'You must be over 18 to register'}
                                        >
                                            {availableDays}
                                        </SelectComponent>
                                        <BirthDateSeparator />

                                        {/* Month */}
                                        <SelectComponent
                                            onlyOnDesktop
                                            mobileMaxScreenWidth={600}
                                            noBottomStripe
                                            value={birthMonth}
                                            onChange={(e) => {
                                                setBirthMonth(e.target.value)
                                                setIsUnder18(false)
                                            }}
                                            default={1}
                                            label={''}
                                            style={{ border: '2px solid #dadaed' }}
                                        >
                                            {months.map((month, index) => (
                                                <option value={index + 1} key={index}>
                                                    {month.name}
                                                </option>
                                            ))}
                                        </SelectComponent>

                                        <SelectComponent
                                            onlyOnMobile
                                            mobileMaxScreenWidth={600}
                                            noBottomStripe
                                            value={birthMonth}
                                            onChange={(e) => {
                                                setBirthMonth(e.target.value)
                                                setIsUnder18(false)
                                            }}
                                            default={1}
                                            label={''}
                                            style={{ border: '2px solid #dadaed' }}
                                        >
                                            {months.map((month, index) => (
                                                <option value={index + 1} key={index}>
                                                    {String(index + 1).length === 1 ? `0${index + 1}` : index + 1}
                                                </option>
                                            ))}
                                        </SelectComponent>

                                        <BirthDateSeparator />

                                        {/* Year */}
                                        <SelectComponent
                                            noBottomStripe
                                            value={birthYear}
                                            onChange={(e) => {
                                                setIsUnder18(false)
                                                setBirthYear(e.target.value)
                                            }}
                                            label={''}
                                            style={{ border: '2px solid #dadaed' }}
                                        >
                                            {availableYears}
                                        </SelectComponent>
                                    </PhoneNumberRow>
                                </RowMain>
                            </Row>
                            <ContinueButtonMain type="submit">
                                <ContinueButtonGradient>CONTINUE</ContinueButtonGradient>
                                <ContinueButtonArrowWrapper />
                            </ContinueButtonMain>
                        </RegisterForm>
                    </Content>
                </ContentWrapper>
            </Main>
        </>
    )
}

export default RegisterScreen
