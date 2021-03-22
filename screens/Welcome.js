import React, { useState,useMemo } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    Dimensions,
    Modal,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login'



const { width, height } = Dimensions.get("window");

const dataImage = [
    {
        id: '1',
        source: require('../assets/pictures/7882.jpg'),
        text: "hehe"
    },
    {
        id: '2',
        source: require('../assets/pictures/7881.jpg'),
        text: "haha"
    },

];

const WelcomeMemo = ({ navigation }) => {

    const [showTerm, SetshowTerm] = useState(false);

    const RenderTerm = (() => {
        return (
            <View>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { SetshowTerm(true) }}>
                    <Text style={{ color: 'gray' }}>Điều khoản sử dụng</Text>
                </TouchableOpacity>
                <Modal visible={showTerm} animationType='slide'>
                    <View>
                        <TouchableOpacity onPress={() => SetshowTerm(false)}>
                            <Text>X</Text>
                            <Text> okokokoko</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>

        )
    })
    const RenderPicture = ((props) => {
        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={props.item}
                renderItem={({ item }) => (
                    <Image
                        style={{ width: width, height: height / 2, overflow: "visible" }}
                        source={item.source}
                    />
                )}
                keyExtractor={item => item.id}
            />
        )
    })
    return (
        <View style={styles.containerWelcome}>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Text style={styles.h1}>
                    Trang chủ.
                    <Text style={styles.header}> TechCare</Text>
                </Text>
                <Text style={styles.headerBottom}>theo dõi toàn diện</Text>
            </View>
            <View style={{ height: height / 2 - 20, paddingBottom: 20 }}>
                <RenderPicture item={dataImage}></RenderPicture>
            </View>
            <View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#0AC4BA', '#2BDA8E', '#0AC4BA']} style={styles.buttonLogin}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>Đăng nhập</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.buttonSignup}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 24, color: 'black' }}>Đăng kí</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <RenderTerm></RenderTerm>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerWelcome: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor:'white'
    },
    header: {
        fontSize: 35,
        color: '#0AC4BA',
        fontWeight: 'bold',
    },
    headerBottom: {
        color: '#C5CCD6',
        fontSize: 20
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    viewButton: {

    },
    buttonLogin: {
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
    buttonSignup: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.3,
        height: width / 8,
        backgroundColor: '#FFF',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 10,
    },
    textButton: {
        fontSize: 24,
        color: 'white'
    }

})

const Welcome = React.memo(WelcomeMemo);
export default Welcome
