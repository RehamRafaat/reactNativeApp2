import React , {useState} from 'react'
import { View , TextInput , StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton/PrimaryButton';
import Colors from '../constants/colors'

export default function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }
    const resetInputHandler = () => {
        setEnteredNumber('');
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99) {
            Alert.alert('Invalid Number !',
                'Number has to be a number between 1 and 99',
                [
                    {text : 'Okay' , style:"destructive",onPress:resetInputHandler}
                ]
            )
            return;
        }
        else {
            onPickNumber(chosenNumber);
        }
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.singleButtonStyle}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.singleButtonStyle}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5,
    },
    inputContainer: {
        padding: 16,
        alignItems : 'center',
        marginHorizontal : 24,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity : 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign : 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight:'bold',
    },
    singleButtonStyle: {
        flex :1,
    }
});