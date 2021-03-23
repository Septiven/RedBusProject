import { Container, Content, Grid, Col, Row, Text, Item, Label, Input, Button, Form, Picker} from 'native-base'
import React from 'react'
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux'

// Styles
import Color from './../Supports/Styles/Color'
import spacing from './../Supports/Styles/Spacing'
import typography from './../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

// Redux
import {onSetDeparture, onSetArrival} from './../Redux/Actions/FilterAction'

const Home = () => {

    const Home = ({onSetDeparture, onSetArrival, filter}) => {

        const checkGStore = () => {
            console.log(filter)
        }
    }

    return(
        <Container>
            <Content>
                <Grid> 
                    <Col style={{height:80 ,justifyContent:'center', ...Color.bgSecondary}}>
                        <Text style={{textAlign:'center', ...typography.fStyleBold,...typography.fsSeven, color:'white'}}>
                            HOME
                        </Text>
                    </Col>
                </Grid>
                <Grid>
                    <Col style={{ ...spacing.pFive}}>
                        <Col style={{...spacing.mtThree}}>
                            <Item floatingLabel style={{width: '100%'}}>
                                <Label>Tempat Keberangkatan</Label>
                                <Input onChangeText={onSetDeparture}/>
                            </Item>
                        </Col>
                        <Col style={{...spacing.mtThree}}>
                            <Item floatingLabel style={{width: '100%'}}>
                                <Label>Tempat Ketibaan</Label>
                                <Input onChangeText={onSetArrival}/>
                            </Item>
                        </Col>
                        <Col style={{...spacing.mtThree}}>
                            
                            <Form>
                                <Item stackedLabel>
                                    <Label>Tanggal Keberangkatan</Label>
                                    <DatePicker
                                        style={{width: 200, marginTop: 10}}
                                        date={new Date()}
                                        minDate={new Date()}
                                        mode="date"
                                        format="DD-MM-YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        
                                        customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            marginLeft: 20
                                        },
                                        dateInput: {
                                            marginLeft: 0,
                                            marginTop: -10,
                                            borderWidth: 0
                                        }
                                        // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => {setTanggal(date)}}
                                    />
                                </Item>
                            </Form>

                        </Col>
                        <Col style={{...spacing.mtThree, ...spacing.mbNine}}>
                            <Form>
                                <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: '100%' }}
                                    placeholder="Jumlah tiket (Maksimal 5 tiket untuk booking)"
                                >
                                    <Picker.Item label="1 Ticket" value="key0" />
                                    <Picker.Item label="2 Ticket" value="key1" />
                                    <Picker.Item label="3 Ticket" value="key2" />
                                    <Picker.Item label="4 Ticket" value="key3" />
                                    <Picker.Item label="5 Ticket" value="key4" />
                                </Picker>
                                </Item>
                            </Form>
                        </Col>
                        <Col>
                            <Button rounded style={{width: '100%', ...Color.bgPrimary}}>
                                <Text style={{textAlign: 'center', width: '100%'}}>
                                    Search
                                </Text>
                            </Button>
                        </Col>
                    </Col>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onSetDeparture, onSetArrival
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)