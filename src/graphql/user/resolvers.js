const users = () => {
  return [
    { id: '2', userName: 'Usuario Marcos' },
    { id: '3', userName: 'Usuario Andre' },
    { id: '4', userName: 'Usuario Andre' },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'Usuario Admin',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
