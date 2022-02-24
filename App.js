import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Header from './src/components/common/Header';
import Video from './src/components/Video';
import Slideimage from './src/components/Slideimage';
import { LogBox } from 'react-native';
import Imagescreen from './src/components/Imagescreen';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {


  return (
    <View style={{ flex: 1, }}>
      <Header />
      <Slideimage />
      <Video />
      <Imagescreen />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {


  },
});
