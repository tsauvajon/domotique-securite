import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const facebookAppId = '1403541726333166';
const googleAppId = '68169708474-k2juo0k8in7b35ehsfjug90o5ru96kf2.apps.googleusercontent.com';

const responseFacebook = (response) => {
  console.log(response);
};

const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => (
  <center>
    <div>
      <FacebookLogin
        appId={facebookAppId}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />
      <GoogleLogin
        clientId={googleAppId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <br /><br />
    </div>
  </center>
);

export default Login;
