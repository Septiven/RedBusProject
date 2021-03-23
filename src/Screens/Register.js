import { Container, Content, Grid, Col, Row, Text, Item, Label, Input, Button } from 'native-base'
import React, { useState } from 'react'

// Styles
import Color from './../Supports/Styles/Color'
import Spacing from './../Supports/Styles/Spacing'
import Font from './../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

// Redux
import {connect} from 'react-redux'

import {onUserRegister} from './../Redux/Actions/UserAction'

const Register = ({navigation: {navigate}, onUserRegister, user}) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errorInput, setErrorInput] = useState('')

    const onEmailValidation = (input) => {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(regex.test(input)){
            setInputEmail(input)
            setErrorInput('')
        }else{
            setErrorInput('Email Tidak Valid')
        }
    }

    const onPasswordValidation = (input) => {
        let symbol = /[!@#$%^&*]/

        if(input.length < 6){
            return setErrorInput('Password Minimal 6 Karakter')
        }
        
        if(!symbol.test(input)){
            return setErrorInput('Password Harus Mengandung Simbol')
        }else{
            setInputPassword(input)
            setErrorInput('')
        }
    }

    const submitRegister = () => {
        onUserRegister(inputEmail, inputPassword)
    }

    return(
        <Container>
            <Content>
                <Grid style={{...Spacing.mtFive, alignItems: 'center'}}>
                    <Col style={{...Spacing.plFive, width: '12%'}}>
                        <Icon name='chevron-circle-left' onPress={() => navigate('Login')} style={{...Font.fsFive}} />
                    </Col>
                    <Col>
                        <Text style={{...Font.fsFive, ...Font.fStyleBold}}>
                            Register
                        </Text>
                    </Col>
                </Grid>
                <Grid> 
                    <Row style={{...Spacing.plFive, ...Spacing.ptFive}}>
                        <Text style={{...Font.fsSeven, ...Font.fStyleBold, ...Color.primary}}>
                            Welcome!
                        </Text>
                    </Row>
                    <Row style={{...Spacing.plFive}}>
                        <Text style={{...Font.fsThree}}>
                            Register your account to continue booking!
                        </Text>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Item floatingLabel style={{width: '100%'}}>
                            <Label>Enter Your Email</Label>
                            <Input name='email' onChangeText={(input) => onEmailValidation(input)}/>
                        </Item>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Item floatingLabel style={{width: '100%'}}>
                            <Label>Enter Your Password</Label>
                            <Input name='password' onChangeText={(input) => onPasswordValidation(input)}/>
                        </Item>
                    </Row>

                    {/* <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Item floatingLabel style={{width: '100%'}}>
                            <Label>Enter Your Confirm Password</Label>
                            <Input />
                        </Item>
                    </Row> */}

                    <Row style={{justifyContent: 'flex-end', ...Spacing.prFive}}>
                        <Text style={{color: 'blue'}}>
                            Forgot Password
                        </Text>
                    </Row>

                    <Row style={{justifyContent: 'center', ...Spacing.prFive}}>
                        <Text style={{color: 'red', fontStyle: 'italic'}}>
                            {errorInput}
                            {
                                user.error?
                                    user.error
                                :
                                    null
                            }
                        </Text>
                    </Row>

                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Button onPress={submitRegister} rounded style={{width: '100%', ...Color.bgPrimary}}>
                            <Text style={{textAlign: 'center', width: '100%'}}>
                                Register
                            </Text>
                        </Button>
                    </Row>
                    <Row style={{justifyContent: 'center', ...Spacing.ptFive}}>
                        <Text onPress={() => navigate('Login')}>
                            Already have account? Login
                        </Text>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onUserRegister
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)