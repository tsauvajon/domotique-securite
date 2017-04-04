import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


const responseFacebook = (response) => {
  console.log(response);
};

const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => (
  <div>
    <FacebookLogin
      appId="1403541726333166"
      autoLoad
      fields="name,email,picture"
      callback={responseFacebook}
    />
    <GoogleLogin
      clientId="68169708474-k2juo0k8in7b35ehsfjug90o5ru96kf2.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  </div>
);

export default Login;
