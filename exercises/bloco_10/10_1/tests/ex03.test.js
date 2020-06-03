const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('getUserName - Async/Await', () => {

  test('Return user name when the ID exists', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  });

  test('Return error message when user ID does not exists', async () => {
    try {
      await getUserName(1);
    } catch (err) {
      expect(err).toEqual({ error: 'User with 1 not found.' })
    }
  })
});