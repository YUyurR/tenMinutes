import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  KeyboardAvoidingView,
} from 'react-native';

function DeleteAccount({navigation}) {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!password) errors.password = '비밀번호를 입력하세요.';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('회원 탈퇴 완료');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <View></View>
      <View style={styles.container}>
        <View style={styles.form}>
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <Text style={styles.text}>비밀번호를 입력하세요.</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <Button
            style={styles.buttons}
            title="탈퇴완료"
            onPress={() => {
              setPassword('');
              if (password) {
                handleSubmit();
                navigation.navigate('LoginPage');
              } else {
                validateForm();
              }
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form: {
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
    height: 40,
    color: '#707070',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  text: {
    color: '#2e2e2e',
  },
});

export default DeleteAccount;
