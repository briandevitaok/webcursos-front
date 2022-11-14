import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from './_app';

const profile = () => {
  const router = useRouter();
  const { dispatch, state } = useContext(AuthContext);
  console.log(state);

  useEffect(() => {
    if (router.query.login_info) {
      const login_info = JSON.parse(router.query.login_info);
      dispatch({ type: 'LOGIN', payload: login_info });
      router.replace('/profile');
    }
  }, [router.query?.login_info]);

  return <div>profile</div>;
};

export default profile;
