const Intern = require('../Employees/intern');
test('creates an Intern object', () => {
    const intern = new Intern('William', 12, 'williamhirsch@gmail.com', 'ENG');
    
    expect(intern.school) .toEqual(expect.any(String));
});
test('gets employee school', () => {
    const intern = new Intern('William', 12, 'williamhirsch@gmail.com', 'ENG');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('gets role of employee', () => {
    const intern = new Intern('William', 12, 'williamhirsch@gmail.com', 'ENG');

    expect(intern.getRole()).toEqual("Intern");
}); 