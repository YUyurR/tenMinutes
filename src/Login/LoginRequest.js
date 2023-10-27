function LoginRequest(username, password) {
  const token = 'GachonCe@23201B00kclub';
  const url = 'http://210.102.178.98:60001/home/t23201/svr/v0.5/src';
  console.log(url + '에 로그인 준비');
  const options = {
    method: 'POST',
    headers: {
      Accept: 'SignupComplete/json',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  console.log(username, password);
  fetch(url, options)
    .then(response => response.json())
    .then(console.log('서버에 로그인 접속중'))
    .then(responseJson => {
      console.log(responseJson);
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
      return 'test';
    });
}

export {LoginRequest};
