import React, { useState } from 'react';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Keyboard,
    Platform,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import { TextInput } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import firebase from '../database/config'
const { width, height } = Dimensions.get("window")

export default Login = ({navigation}) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onPressLogin = () => {
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((returnUser) => {
                setUsername(returnUser);
                console.log(returnUser.user.uid)
            })
            .catch((error) => {
            })
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.Login}>Đăng Nhập</Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'column', marginTop: 50 }}>
                    <View style={styles.Input}>
                        <TextInput
                            label='Email'
                            mode='outlined'
                            onChangeText={text => setUsername(text)}
                        />
                        <TextInput
                            secureTextEntry
                            label='Mật khẩu'
                            mode='outlined'
                            onChangeText={text => setPassword(text)}
                        />
                    </View >
                    <View style={{ alignItems: 'center' }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#0AC4BA', '#2BDA8E']} style={styles.button}>
                            <TouchableOpacity onPress={onPressLogin}>
                                <Text style={styles.textButton}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'gray' }}>Yêu cầu cấp lại mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={require('../assets/pictures/background1.png')}
                        style={{ width: width, height: height / 2, resizeMode: 'cover' }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start'
    },
    Login: {
        fontSize: 35,
        marginLeft: 28,
        marginTop: 20,
        fontWeight: 'bold'
    },
    Input: {
        width: width / 1.3,
        justifyContent: 'space-between',
        paddingBottom: 40
    },
    button: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.3,
        height: width / 8,
        backgroundColor: '#2BDA8E',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 9,
            height: 9,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    textButton: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white"
    }
});

