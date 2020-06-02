const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter(animal => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      }
      const error = 'Nenhum animal encontrado!'
      return reject(error);
    }, 500);
  })
)

const getAnimalByAge = age => findAnimalsByAge(age).then(animal => animal);
// ---------------------

describe('findAnimalsByAge - Promise', () => {
  describe('Quando existe o animal com a idade', () => {
    test('Retorne os animais que tem a idade passada como argumento', () => {
      expect.assertions(1);
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      return expect(getAnimalByAge(5)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com a idade passada', () => {
    test('Retorna uma mensagem de erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects.toBe('Nenhum animal encontrado!');
    });
  });
});



