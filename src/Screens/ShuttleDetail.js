import { Body, Button, Card, Col, Container, Content, Grid, Header, Left, Right, Row, Spinner, Text, Title } from 'native-base'
import {Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'

// Styles
import Color from './../Supports/Styles/Color'
import Spacing from './../Supports/Styles/Spacing'
import Font from './../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

// Action
import {getShuttleDetail, getSeatBooked} from './../Redux/Actions/ShuttlesAction'

const ShuttleDetail = ({navigation, route, getShuttleDetail, shuttles, getSeatBooked, filter}) => {

    const [selectedSeat, setSelectedSeat] = useState([])
    const [isTotalSeatTrue, setIsTotalSeatTrue] = useState(false)
    const [errorSelectedSeat, setErrorSelectedSeat] = useState('')

    useEffect(() => {
        getShuttleDetail(route.params.id)
        getSeatBooked(route.params.id, filter.date)
    }, [])

    const onSelectSeat = (seatNumber) => {
        // Apakah jumlah selected seat < dengan total seat yg di input
        if(selectedSeat.length < filter.seat){
            if(selectedSeat.includes(seatNumber)){
                // 1. Cari seat ada di index ke berapa
                let indexSeat = selectedSeat.indexOf(seatNumber)
    
                let arrSelectedSeat = [...selectedSeat]
                arrSelectedSeat.splice(indexSeat, 1)
                
            }else{
                setSelectedSeat([...selectedSeat, seatNumber])
            }
        }else{
            // Apakah seat yg dipilih ada di dalam selected seat
            if(selectedSeat.includes(seatNumber)){
                // 1. Cari seat ada di index ke berapa
                let indexSeat = selectedSeat.indexOf(seatNumber)
    
                let arrSelectedSeat = [...selectedSeat]
                arrSelectedSeat.splice(indexSeat, 1)
    
                setSelectedSeat(arrSelectedSeat)
                setErrorSelectedSeat('')
            }else{
                setErrorSelectedSeat('Total Seat Maksimal Hanya' + filter.seat)
            }
        }
    }

    if(shuttles.shuttleDetail){
        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                    <Left>
                        <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
                    </Left>
                    <Body>
                        <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                            Shuttle Detail
                        </Text>
                    </Body>
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Image source={{uri: shuttles.shuttleDetail.image1}} style={{width: '100%', height: 200}} />
                        </Row>
                    </Grid>
                    <Grid>
                        <Col>
                            <Image source={{uri: shuttles.shuttleDetail.image2}} style={{height: 100}} />
                        </Col>
                        <Col>
                            <Image source={{uri: shuttles.shuttleDetail.image3}} style={{height: 100}} />
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Col>
                            <Text style={{...Font.fsSix, fontWeight: 'bold'}}>
                                {shuttles.shuttleDetail.name}
                            </Text>
                        </Col>
                        <Col style={{width: '12%'}}>
                            <Text style={{textAlign: 'right', paddingVertical: 3, textAlign: 'center', borderRadius: 3, ...Color.bgSuccess, ...Color.light}}>
                                <Icon name='star' /> 5
                            </Text>
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive}}>
                        <Row>
                            <Text>
                                Executive
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{...Font.fsFive, ...Spacing.mtThree, fontWeight: 'bold'}}>
                                Rp. {shuttles.shuttleDetail.price}
                            </Text>
                        </Row>
                    </Grid>
                    <Card style={{...Spacing.mlFive, ...Spacing.mrFive, ...Spacing.mtFive}}>
                        <Grid style={{...Spacing.pxFive, ...Spacing.myThree}}>
                            <Col>
                                <Text style={{...Font.fsThree}}>
                                    Dari : 
                                </Text>
                                <Text style={{...Font.fsFive}}>
                                    {shuttles.shuttleDetail.from}
                                </Text>
                            </Col>
                            <Col>
                                <Text style={{textAlign: 'center', ...Font.fsFive}}>
                                    -
                                </Text>
                            </Col>
                            <Col>
                                <Text style={{...Font.fsThree}}>
                                    Tujuan : 
                                </Text>
                                <Text style={{...Font.fsFive}}>
                                    {shuttles.shuttleDetail.to}
                                </Text>
                            </Col>
                        </Grid>
                    </Card>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Row>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Facility
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtTwo}}>
                        {
                            shuttles.shuttleDetail.facility.map((value, index) => {
                                return(
                                    <Col key={index}>
                                        <Text style={{width: 35, height: 35}}>toilet</Text>
                                        {/* <Image source={require('./../../Supports/Images/toilet.png')} style={{width: 35, height: 35}} /> */}
                                    </Col>
                                )
                            })
                        }
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Row>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Seat
                            </Text>
                            <Text>
                                {
                                    errorSelectedSeat
                                }
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.pxEight, ...Spacing.pyFive, ...Spacing.mtTwo, ...Spacing.mxFive, flexWrap: 'wrap', borderWidth: 1, borderColor: 'black', borderRadius: 3}}>
                        {
                            shuttles.shuttleDetail.seat.map((value, index) => {
                                return(
                                    <Col key={index} style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                                        {
                                            shuttles.seatBooked.includes(value)?
                                                <>
                                                    <Icon1 name='person' style={{fontSize: 25}} />
                                                    <Text>
                                                        Booked
                                                    </Text>
                                                </>
                                            :
                                                
                                                <>
                                                    {
                                                        selectedSeat.includes(value)?
                                                            <TouchableOpacity onPress={() => onSelectSeat(value)}>
                                                                <Icon1 name='person' style={{fontSize: 25, color:'blue'}} />
                                                                <Text>
                                                                    {value}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        :
                                                            <TouchableOpacity onPress={() => onSelectSeat(value)}>
                                                                <Icon1 name='person-outline' style={{fontSize: 25, color:'black'}} />
                                                                <Text>
                                                                    {value}
                                                                </Text>
                                                            </TouchableOpacity>
                                                    }
                                                </>
                                        }
                                    </Col>
                                )
                            })
                        }
                    </Grid>
                </Content>
            </Container>
        )
    }

    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Left>
                    <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
                </Left>
                <Body>
                    <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                        Shuttle Detail
                    </Text>
                </Body>
            </Header>
            <Spinner color='red' />
            <Text style={{textAlign: 'center', ...Font.fsFive}}>
                Loading
            </Text>
        </Container>
    )

}

const mapDispatchToProps = {
    getShuttleDetail, getSeatBooked
}

const mapStateToProps = (state) => {
    return{
        shuttles: state.shuttles,
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShuttleDetail)