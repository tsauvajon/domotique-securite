import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import ZoomInPaper from '../ZoomInPaper';

const facebookAppId = '1403541726333166';
const googleAppId = '68169708474-k2juo0k8in7b35ehsfjug90o5ru96kf2.apps.googleusercontent.com';

const Login = props => (
  <center>
    <ZoomInPaper>
      <List>
        <ListItem>
          <FacebookLogin
            appId={facebookAppId}
            autoLoad={false}
            fields="name,email,picture"
            callback={payload => props.onConnectFb(payload)}
          />
        </ListItem>
        <ListItem>
          <GoogleLogin
            clientId={googleAppId}
            buttonText="Login with Google"
            onSuccess={payload => props.onConnectGoogle(payload)}
            onFailure={payload => props.onConnectGoogle(payload)}
          />
        </ListItem>
      </List>
    </ZoomInPaper>
  </center>
);

Login.propTypes = {
  onConnectFb: PropTypes.func.isRequired,
  onConnectGoogle: PropTypes.func.isRequired,
};

export default Login;
