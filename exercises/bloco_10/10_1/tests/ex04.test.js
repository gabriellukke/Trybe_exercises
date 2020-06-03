const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
    
describe('getRepos', () => {

  test('Return a list of repositories', () => {
    const url = 'https://api.github.com/users/tryber/repos';
    return getRepos(url).then(list => {
      expect(list).toContain('sd-01-week4-5-project-todo-list');
      expect(list).toContain('sd-01-week4-5-project-meme-generator');
    });
  });

});