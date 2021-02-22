import React from 'react';
import {useSelector} from 'react-redux';
import {AuthStack, HomeNav} from '.';

const Main = () => {
  const {isSignedIn} = useSelector((state) => state.auth);
  return <>{isSignedIn ? <HomeNav /> : <AuthStack />}</>;
};

export default Main;
