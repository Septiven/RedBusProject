import {Button, Container, Text } from 'native-base'
import React from 'react'
import {connect} from 'react-redux'

// Redux
import {onUserLogout} from './../Redux/Actions/UserAction'

const Profile = ({onUserLogout}) => {
    return(
        <Container>
            <Text>
                Ini Profile
            </Text>
            <Button onPress={onUserLogout}>
                <Text>
                    Logout
                </Text>
            </Button>
        </Container>
    )
}

const mapDispatchToProps = {
    onUserLogout
}

export default connect('', mapDispatchToProps)(Profile)