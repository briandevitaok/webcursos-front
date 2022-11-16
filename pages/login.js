import { useContext } from 'react';
import { AuthContext } from './_app';

const login = () => {
  const { dispatch, state } = useContext(AuthContext);
  return <div>login</div>;
};

export default login;
