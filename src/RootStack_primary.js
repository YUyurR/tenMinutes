import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import MainPage from './Main/MainPage';
import MyPage from './Main/MyPage_directory/MyPage';
import GarbageDetect from './Main/Detect_Garbage/GarbageDetect';
import AnimalCare from './Main/Animal_care/AnimalCare';
import UserInfo from './Main/MyPage_directory/User_Info/UserInfo';
import DeleteAccount from './Main/MyPage_directory/User_Info/Delete_Account/DeleteAccount';
import ViewLocataionData from './Main/Find_Garbage_Can/ViewLocataionData';
import LoginKakao from './Login/LoginKakao';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GarbageDetect"
        component={GarbageDetect}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: '마이페이지',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AnimalCare"
        component={AnimalCare}
        options={{
          title: '동물 캐릭터 키우기',
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '개인 정보 관리',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{
          title: '회원 탈퇴',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ViewLocataionData"
        component={ViewLocataionData}
        options={{
          title: '공공쓰레기통 찾기',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="LoginKakao"
        component={LoginKakao}
        options={{
          title: '카카오 로그인',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
