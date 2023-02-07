const Manager = require('../Employees/manager');
test('creates an Manager object', () => {
    const manager = new Manager('William', 12, 'williamhirsch@gmail.com', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('William', 12, 'williamhirsch@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 