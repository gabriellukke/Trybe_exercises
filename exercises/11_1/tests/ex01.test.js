const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}
    
test(`Transform string in to uppercase`, (done) => {
  uppercase('str', (str) => {
    expect(str).toBe('STR');
    done();
  });
});