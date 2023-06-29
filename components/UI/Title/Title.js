import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors'
export default function Title({children}) {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>{children}</Text>
            </View>
        )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding:12,
    }
  });