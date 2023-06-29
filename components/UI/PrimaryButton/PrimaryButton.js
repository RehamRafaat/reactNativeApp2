import React from 'react'
import { View , Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors'
export default function PrimaryButton({ children , onPress }) {
    return (
        
        <View style={styles.buttonOutercontainer}>
            <Pressable style={({pressed})=> pressed ? [styles.buttonInnercontainer , styles.pressed] : styles.buttonInnercontainer}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOutercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow : 'hidden',
    },
    buttonInnercontainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign : 'center',
    },
    pressed: {
        opacity : 0.75,
    }
});