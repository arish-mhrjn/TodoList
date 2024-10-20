import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import GithubUsers from './GithubUsers';
const UseEffect3 = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch('https://api.github.com/users');
      setUsers(await response.json());
    } catch (error) {
      console.log('fetch error');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <GithubUsers Users={Users} />
    </>
  );
};

export default UseEffect3;
