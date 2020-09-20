import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Home = () => {


    const navigation = useNavigation();

    const handlerOnPress = () => {
        navigation.navigate('CreateRecord')
    };

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image
                    style={styles.gamerImage}
                    source={require('../../assets/gamer.png')} />
                <Text style={styles.title}> Vote Agora!</Text>
                <Text style={styles.subTitle}> Nos diga qual é  seu jogo favorito!</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handlerOnPress}>
                    <Text style={styles.buttonText}>COLETAR DADOS</Text>
                    <View style={styles.buttonIcon}>
                        <Icon name="chevron-right" color="#FFF" size={25} />
                    </View>
                </RectButton>
            </View>
        </>

    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        backgroundColor: '#0B1F34',
        alignItems: 'center',
    },
    gamerImage: {
        width: 300,
        height: 280
    },
    title: {
        color: '#00D4FF',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 31,
        fontFamily: "Play_700Bold",
    },
    subTitle: {
        color: '#ED7947',
        fontSize: 21,
        marginTop: 15,
        fontFamily: "Play_400Regular",
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#00D4FF',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonIcon: {
        backgroundColor: '#ED7947',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: "Play_700Bold",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0B1F34',
    }
});


export default Home;