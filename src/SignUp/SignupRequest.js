function SignupRequest(newuser) {
  const token = 'GachonCe@23201B00kclub';
  const sendto = 'http://210.102.178.98:60001/src/userManagements/signup';

  console.log(sendto + '에 연결 준비');
  const options = {
    method: 'POST',
    headers: {
      Accept: 'SignupComplete/json',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newuser),
  };

  console.log(JSON.stringify({newuser}));

  fetch(sendto, options)
    .then(response => {
      response.json();
      console.log('response: ' + JSON.stringify({response}));
    })
    .then(console.log('서버에 접속은 함'))
    .then(responseJson => {
      console.log({responseJson});
      if (responseJson.status === 'success') {
        console.log(responseJson.data.stu_id);
        return 1;
      } else {
        setErrortext('아이디와 비밀번호를 다시 확인해주세요');
        console.log('로그인 실패');
        return 0;
      }
    })
    .catch(error => {
      console.error(`${error}--에러 발생`);
    });
}
export {SignupRequest};
