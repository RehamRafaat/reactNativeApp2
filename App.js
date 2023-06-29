import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors'
export default function App() {
  const [gameNumber, setGameNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
       setGameNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;
  if (gameNumber) {
    screen = <GameScreen userNumber={gameNumber} />
  }
  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]}  style={styles.rootScreen}>
      <ImageBackground
        source={require('../starting-project/assets/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle = {styles.backgroundOpc}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
       </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex : 1,
  },
  backgroundOpc :{
    opacity : 0.15,
  }
});
