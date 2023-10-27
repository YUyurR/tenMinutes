import React, {useState} from 'react';
import {usrAnimalStatus} from './usrAnimalStatus.js';

import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

function ShowAnimalProfile() {
  const acquireStatus = usrAnimalStatus;

  let showName;
  if (usrAnimalStatus.animal == 0) {
    showName = '레서판다';
  } else if (usrAnimalStatus.animal == 1) {
    showName = '바다거북';
  } else if (usrAnimalStatus.animal == 2) {
    showName = '펭귄';
  }

  const showSprite = acquireStatus.appearance;
  const showBackground = acquireStatus.background;
  return (
    <View>
      <Text style={styles.status_title}>{showName}</Text>
      <ImageBackground source={showBackground} style={styles.background_image}>
        <Image source={showSprite} style={styles.animal_image} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  animal_image: {
    width: 130,
    height: 160,
    alignSelf: 'center',
    marginTop: 100,
  },
  background_image: {
    width: 350,
    height: 400,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  status_title: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default ShowAnimalProfile;
