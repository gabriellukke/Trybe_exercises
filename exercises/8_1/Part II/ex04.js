const skills = [
  'Git',
  'Bash',
  'HTML',
  'CSS',
  'JavaScript'
];


const replaceStr = str => {
  const phrase = `Tryber x aqui!
Tudo bem ?`;
  return mySkills(phrase.replace('x', str));
}

const mySkills = str => {
  return `${str}
Minhas cinco habilidades são: 

${skills.sort().join(', \n')}
#goTrybe`;
}

console.log(replaceStr('Gabriel'))