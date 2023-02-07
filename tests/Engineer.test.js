const Engineer = require('../Employees/engineer'); 
test('creates an Engineer object', () => {
    const engineer = new Engineer('William', 12, 'williamhirsch@gmail.com', 'williamhirschh');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('William', 12, 'williamhirsch@gmail.com', 'williamhirschh');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('William', 12, 'williamhirsch@gmail.com', 'williamhirschh');

    expect(engineer.getRole()).toEqual("Engineer");
});