import React, {useState} from 'react';
import {
  ScrollView,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  KeyboardAvoidingView,
} from 'react-native';

function UserInfo({navigation}) {
  const name = '홍길동';
  const date_birth = '19990418';
  let [nickname, setNickname] = useState('고슴도치');
  let [email, setEmail] = useState('hedgehogs@asdfg.com');
  const id = 'sea23';
  let [password, setPassword] = useState('');
  let [pwConfirm, setConfirm] = useState('');

  const [isReadOnly, setReadOnly] = useState(true);
  const [toggleBorder, setBorder] = useState('white');

  const toggleReadOnly = () => {
    setReadOnly(true ? false : true);
    setBorder('white' ? '#ccc' : 'white');
  }; //수정버튼에서 readOnly 토글하는 함수

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.signupform}>
        <Text style={styles.text}>이름</Text>
        <TextInput style={styles.input} value={name} editable={false} />

        <Text style={styles.text}>ID</Text>
        <TextInput
          style={styles.input}
          value={id}
          autoCapitalize="none"
          readOnly={true}
        />

        <Text style={styles.text}>생년월일</Text>
        <TextInput style={styles.input} value={date_birth} readOnly={true} />

        <Text style={styles.text}>닉네임</Text>
        <View flexDirection="row">
          <TextInput
            id="#nickname"
            width={'500'}
            style={styles.input}
            placeholderTextColor="#7a7a7a"
            placeholder="닉네임"
            value={nickname}
            onChangeText={setNickname}
            autoCapitalize="none"
            flex={6}
            readOnly={isReadOnly}
            borderColor={toggleBorder}
          />
          <View style={styles.editButton}>
            <Button title="수정" onPress={toggleReadOnly} />
          </View>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.text}>이메일</Text>
          <View flexDirection="row">
            <TextInput
              id="#email"
              style={styles.input}
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
              autoCapitalize="none"
              flex={6}
              readOnly={isReadOnly}
              borderColor={toggleBorder}
            />
            <View style={styles.editButton}>
              <Button title="수정" onPress={toggleReadOnly} />
            </View>
          </View>

          <Text style={styles.text}>비밀번호</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            placeholder="PW(영문+숫자+특수문자 포함 8~16자)"
            value={password}
            maxLength={16}
            secureTextEntry
            onChangeText={setPassword}
            autoCapitalize="none"
            editable={true}
          />

          <Text style={styles.text}>비밀번호 확인</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            placeholder="PW 확인"
            value={pwConfirm}
            maxLength={16}
            secureTextEntry
            onChangeText={setConfirm}
            autoCapitalize="none"
            editable={true}
          />
          <View style={styles.buttons}>
            <Button
              title="저장하기"
              onPress={() => {
                console.log('버튼 입력');
              }}
            />
            <View style={{marginTop: 13}}>
              <Button
                title="회원탈퇴"
                onPress={() => {
                  navigation.navigate('DeleteAccount');
                }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  signupform: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
    marginTop: 30,
    marginBottom: 30,
    Width: '100%',
  },
  text: {
    color: '#2e2e2e',
  },
  input: {
    height: 38,
    color: '#595959',
    borderColor: 'white',
    borderWidth: 1,
    marginRight: 4,
    marginBottom: 18,
    padding: 10,
    borderRadius: 5,
  },
  buttons: {
    marginTop: 10,
    justifyContent: 'center',
  },
  editButton: {
    width: 60,
    padding: 0,
  },
});

export default UserInfo;
