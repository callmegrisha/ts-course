const skills: string[] = ['html', 'css', 'js'];

for (let skill of skills) {
  console.log(skill.toUpperCase());
}

const skillsResult = skills
  .filter((skill: string) => skill !== 'js')
  .map((skill) => skill + '!')
  .reduce((a, b) => a + b);

console.log('skillsResult', skillsResult);
