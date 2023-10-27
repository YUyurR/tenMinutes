import React from 'react';
import {View, Button, StyleSheet, Pressable} from 'react-native';
import ShowAnimalProfile from './Animal_care/ShowAnimalProfile';

function MainPage({navigation}) {
  return (
    <View>
      <Pressable onPress={() => navigation.push('AnimalCare')}>
        <ShowAnimalProfile />
      </Pressable>
      <Text>병뚜껑</Text>
      <Button
        title="분리배출 매뉴얼"
        onPress={() => navigation.push('')}
        style={styles.buttons}
      />
      <Button
        title="공공쓰레기통 위치 확인"
        onPress={() => navigation.push('ViewLocataionData')}
      />
      <Button title="마이페이지" onPress={() => navigation.push('MyPage')} />
      <Button
        title="쓰레기 분류하기"
        onPress={() => navigation.push('GarbageDetect', {id: 1})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default MainPage;
