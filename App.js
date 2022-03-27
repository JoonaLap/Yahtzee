import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';
import Gameboard from './components/Gameboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Gameboard/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}