import React from 'react';
import {View, Button} from 'react-native';

function MyPage({navigation}) {
  return (
    <View>
      <Button title="과거 캐릭터 조회" onPress={() => navigation.push('')} />
      <Button title="분리배출 히스토리" onPress={() => navigation.push('')} />
      <Button
        title="개인정보 관리"
        onPress={() => navigation.push('UserInfo')}
      />
      <Button
        title="로그아웃"
        onPress={() => {
          navigation.push('LoginPage');
        }}
      />
      <Button title="문의하기" onPress={() => {}} />
    </View>
  );
}

export default MyPage;
