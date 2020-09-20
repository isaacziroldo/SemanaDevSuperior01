import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import PlatformCard from './PlatformCard';
import { Game, GamePlatform } from './types';
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import axios from 'axios';
const placeholder = {
    label: 'Selecione o game',
    value: null
}

const BASE_URL = 'https://sds1-isaac.herokuapp.com'

const mapSelectValues = (games : Game[]) =>{
    return games.map(game => ({
        ...game,
        label: game.title,
        value: game.id
    }));
}
const CreateRecord = () => {

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);
    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const handleChangePlatform = (selectedPlatform: GamePlatform) => {
        setPlatform(selectedPlatform);
        const gamesByPlatform = allGames.filter(
            game => game.platform === selectedPlatform
        )
        setFilteredGames(gamesByPlatform);
    }
    const handleSubmit = () => {

        const payload = {name, age , gameId: selectedGame}
        axios.post(`${BASE_URL}/records`, payload)
        .then(() => {
            ToastAndroid.show('Dados Salvos com sucesso !',ToastAndroid.SHORT)
            setName('');
            setAge('');
            setSelectedGame('');
            setPlatform(undefined);
        }).catch(() => ToastAndroid.show('Erro ao salvar informações',ToastAndroid.TOP))
    }


    useEffect(() => {
        axios.get(`${BASE_URL}/games`)
            .then(response => {
                const selectValue = mapSelectValues(response.data);
                setAllGames(selectValue);
            }).catch(() => ToastAndroid.show('Erro ao listar os jogos',ToastAndroid.TOP))
    }, []);
    return (
        <>
            <Header />
            <View style={styles.container}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nome"
                    placeholderTextColor="#9E9E9E" 
                    onChangeText={text => setName(text)}
                    value={name}/>
                <TextInput
                    value={age}
                    onChangeText={age => setAge(age)}
                    placeholder="Idade"
                    placeholderTextColor="#9E9E9E"
                    keyboardType="numeric"
                    maxLength={2}
                    style={styles.inputText} />
                <View style={styles.platformContainer}>
                    <PlatformCard
                        platform='PC'
                        icon="laptop"
                        onChange={handleChangePlatform}
                        activePlatform={platform} />
                    <PlatformCard
                        platform='PLAYSTAION'
                        icon="playstation"
                        onChange={handleChangePlatform}
                        activePlatform={platform} />
                    <PlatformCard
                        platform='XBOX'
                        icon="xbox"
                        onChange={handleChangePlatform}
                        activePlatform={platform} />
                </View>
                <RNPickerSelect

                    value={selectedGame}
                    Icon={() => {
                        return <Icon name="chevron-down" color="#9e9e9e" size={25} />
                    }}
                    style={pickerSelectSytles}
                    placeholder={placeholder}
                    onValueChange={(value) => setSelectedGame(value)}
                    items={filteredGames}
                />
                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            SALVAR
                        </Text>
                    </RectButton>
                </View>
            </View>

        </>
    );

};

const pickerSelectSytles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
    },
    placeholder: {
        color: '#9E9E9E',
        fontSize: 16,
        fontFamily: "Play_700Bold",
    },
    iconContainer: {
        top: 10,
        right: 12,
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingBottom: 50
    },
    inputText: {
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        fontFamily: "Play_700Bold",
        fontSize: 16,
        paddingLeft: 20,
        marginBottom: 21
    },
    platformContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00D4FF',
        flexDirection: 'row',
        borderRadius: 10,
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: "Play_700Bold",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0B1F34',
    }
});

export default CreateRecord;
