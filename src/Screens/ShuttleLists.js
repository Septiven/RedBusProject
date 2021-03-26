import { Col, Container, Content, Grid, Header, Row, Text, Title, View, Spinner} from 'native-base'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'

// style
import Color from './../Supports/Styles/Color'
import Spacing from './../Supports/Styles/Spacing'
import Font from './../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

import {getShuttleLists} from './../Redux/Actions/ShuttlesAction'

const ShuttleLists = ({route, getShuttleLists, shuttles, navigation: {navigate}}) => {

    useEffect(() => {
        let departure = route.params.data.departure
        let arrival = route.params.data.arrival
        console.log(route.params.data.date)
        getShuttleLists(departure, arrival)
    }, [])

    if(shuttles.shuttleList === null){
        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                    <Title>
                        Bandung to Surabaya
                    </Title>
                </Header>
                <Spinner color='red' />
                <Text style={{textAlign: 'center', ...Font.fsFive}}>
                    Loading
                </Text>
            </Container>
        )
    }

    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Title>
                    {route.params.data.departure} to {route.params.data.arrival}
                </Title>
            </Header>
            <Content style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                {
                    shuttles.shuttleList.length === 0?
                        <View>
                            <Grid>
                                <Row>
                                    <Text style={{textAlign: 'center', width: '100%'}}>
                                        Armada Tidak Ditemukan
                                    </Text>
                                </Row>
                            </Grid>
                        </View>
                    :
                        shuttles.shuttleList.map((value, index) => {
                            return(
                                <TouchableOpacity key={index} onPress={() => navigate('ShuttleDetail', {id: value.id})}>
                                    <View style={{...Spacing.mbThree, ...Spacing.pbFive, borderBottomWidth: 1, borderColor: 'grey'}}>
                                        <Grid>
                                            <Col>
                                                <Text style={{...Font.fsFive}}>
                                                    12:00 - 12:00
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Text style={{textAlign: 'right', fontWeight: 'bold', ...Font.fsFive}}>
                                                    Rp.{(value.price).toLocaleString()}
                                                </Text>
                                            </Col>
                                        </Grid>
                                        <Grid>
                                            <Row>
                                                <Text>
                                                    10H 11M - {value.seat.length} Seat
                                                </Text>
                                            </Row>
                                        </Grid>
                                        <Grid style={{...Spacing.mtThree, alignItems: 'center'}}>
                                            <Col>
                                                <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                                    {value.name}
                                                </Text>
                                            </Col>
                                            <Col style={{width: '12%'}}>
                                                <Text style={{textAlign: 'center', borderRadius: 3, paddingVertical: 3, ...Color.bgSuccess, ...Color.light}}>
                                                    <Icon name='star' /> 5
                                                </Text>
                                            </Col>
                                        </Grid>
                                        <Grid style={{...Spacing.mtThree}}>
                                            <Row>
                                                <Text style={{...Font.fsFive}}>
                                                    {value.from} - {value.to}
                                                </Text>
                                            </Row>
                                        </Grid>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                }
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getShuttleLists
}

const mapStateToProps = (state) => {
    return{
        shuttles: state.shuttles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShuttleLists)