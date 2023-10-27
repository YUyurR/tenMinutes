import React from 'react';
import {View, Button} from 'react-native';
import ShowAnimalProfile from './ShowAnimalProfile';

function AnimalCare({navigation}) {
  return (
    <View>
      <ShowAnimalProfile />
      <Button title="캐릭터 성장" onPress={() => navigation.push('')} />
      <Button title="인테리어 변경" onPress={() => navigation.push('')} />
    </View>
  );
}

export default AnimalCare;
