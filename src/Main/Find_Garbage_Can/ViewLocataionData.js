import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {View, Text, StyleSheet, Button} from 'react-native';

function ViewLocataionData() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{uri: 'https://map.kakao.com/'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: 400,
    height: 300,
  },
});

export default ViewLocataionData;
