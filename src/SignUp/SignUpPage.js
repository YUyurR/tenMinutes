import React, {useState} from 'react';
import {
  ScrollView,
  Keyboard,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {SignupRequest} from './SignupRequest.js';

function SignUpPage({navigation}) {
  let signupForm = {
    SubmitUserName: null,
    SubmitDate_birth: null,
    SubmitNickname: null,
    SubmitEmail: null,
    SubmitId: null,
    SubmitPassword: null,
    //SubmitPwConfirm: null,
  };

  const [signedUp, setSignup] = useState(false);
  const [username, setName] = useState('');
  const [date_birth, setBday] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [pwConfirm, setConfirm] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = '이름을 입력하세요.';
    if (!date_birth) errors.date_birth = '생년월일을 입력하세요';
    if (!nickname) errors.nickname = '닉네임을 입력하세요.';
    if (!email) errors.email = '이메일을 입력하세요.';
    if (!id) errors.id = '아이디를 입력하세요.';
    if (!password) errors.password = '비밀번호를 입력하세요.';
    if (!pwConfirm)
      errors.pwConfirm = '비밀번호를 확인란에 다시 한번 입력해주세요.';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      signupForm.SubmitUserName = username;
      signupForm.SubmitDate_birth = date_birth;
      signupForm.SubmitNickname = nickname;
      signupForm.SubmitEmail = email;
      signupForm.SubmitId = id;
      signupForm.SubmitPassword = password;
      //signupForm.SubmitPwConfirm = pwConfirm;

      let testvalue = SignupRequest(signupForm);
      testvalue;
      console.log(testvalue);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.signupform}>
          {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholderTextColor="#666666"
            placeholder="이름"
            value={username}
            onChangeText={setName}
          />

          {errors.date_birth ? (
            <Text style={styles.errorText}>{errors.date_birth}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholderTextColor="#666666"
            placeholder="생년월일(yyyy/mm/dd)"
            value={date_birth}
            keyboardType="numeric"
            onChangeText={setBday}
          />

          {errors.nickname ? (
            <Text style={styles.errorText}>{errors.nickname}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholderTextColor="#666666"
            placeholder="닉네임"
            value={nickname}
            onChangeText={setNickname}
          />

          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <KeyboardAvoidingView behavior="position">
            <View style={styles.wrapper}></View>
            <TextInput
              style={styles.input}
              placeholderTextColor="#666666"
              placeholder="이메일"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
              autoCapitalize="none"
            />

            {errors.id ? (
              <Text style={styles.errorText}>{errors.id}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              placeholderTextColor="#666666"
              placeholder="ID 입력"
              maxLength={8}
              value={id}
              onChangeText={setID}
              autoCapitalize="none"
            />

            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              placeholderTextColor="#666666"
              placeholder="PW(영문+숫자+특수문자 포함 8~16자)"
              value={password}
              maxLength={16}
              secureTextEntry
              onChangeText={setPassword}
              autoCapitalize="none"
            />

            {errors.pwConfirm ? (
              <Text style={styles.errorText}>{errors.pwConfirm}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              placeholderTextColor="#666666"
              placeholder="PW 확인"
              value={pwConfirm}
              maxLength={16}
              secureTextEntry
              onChangeText={setConfirm}
              autoCapitalize="none"
            />

            <Button
              title="가입완료"
              onPress={() => {
                handleSubmit();
                if (signedUp == true) {
                  navigation.navigate('MainPage');
                }
              }}
            />
          </KeyboardAvoidingView>
        </View>
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
    marginTop: 64,
    Width: '100%',
  },
  input: {
    flexDirection: 'row',
    height: 40,
    color: '#595959',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  wrapper: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default SignUpPage;
