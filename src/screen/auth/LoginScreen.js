import {Item, Input, Button, Text} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthModal} from '../../components';
import {loginAction} from '../../redux/action/authActions';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <AuthModal />
      <Item>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={(e) => setUsername(e)}
        />
      </Item>
      <Item>
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry
        />
      </Item>
      <Item>
        <Button onPress={() => dispatch(loginAction({username, password}))}>
          <Text>Login</Text>
        </Button>
      </Item>
      <Item>
        <Button onPress={() => navigation.replace('Register')}>
          <Text>Register</Text>
        </Button>
      </Item>
    </View>
  );
};

export default LoginScreen;
