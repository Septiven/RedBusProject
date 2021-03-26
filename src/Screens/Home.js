import { Container, Content, Grid, Col, Row, Text, Item, Label, Input, Button, Form, Picker} from 'native-base'
import React, {useState} from 'react'
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux'

// Styles
import Color from './../Supports/Styles/Color'
import spacing from './../Supports/Styles/Spacing'
import typography from './../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

// Redux
import {onSetDeparture, onSetArrival, onSetDate,  onSetTotalSeat} from './../Redux/Actions/FilterAction'

const Home = ({navigation: {navigate},onSetDeparture, onSetArrival, filter, onSetTotalSeat,onSetDate}) => {

    const [error, setError] = useState('')

    const onSearchShuttle = () => {

        if(filter.seat > 3){
            return setError('Jumlah Kursi Max 3')
        }

        if(filter.departure && filter.arrival && filter.date && filter.seat){
            navigate('ShuttleLists', {data: filter})
            setError('')
        }else{
            return setError('Masukan Semua Inputan')
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
                                        date={filter.date}
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
                                        onDateChange={(date) => onSetDate(date)}
                                    />
                                </Item>
                            </Form>

                        </Col>
                        <Col style={{...spacing.mtThree, ...spacing.mbNine}}>
                            <Item style={{width: '100%'}}>
                                <Input placeholder='Jumlah Kursi (Max 3)' onChangeText={onSetTotalSeat} style={{paddingVertical: 0, fontSize: 15}} />
                            </Item>
                        </Col>
                        <Col>
                            <Button onPress={onSearchShuttle} rounded style={{width: '100%', ...Color.bgPrimary}} block>
                                <Text style={{textAlign: 'center', width: '100%'}}>
                                    Search
                                </Text>
                            </Button>
                        </Col>
                        <Col style={{justifyContent: 'center'}}>
                        <Text style={{...Color.primary, fontStyle: 'italic'}}>
                            {
                                error
                            }
                        </Text>
                        </Col>
                    </Col>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onSetDeparture, onSetArrival, onSetTotalSeat, onSetDate
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)