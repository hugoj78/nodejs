module.exports = (app) => {
    // require controller
    const client = require('../controllers/client.controller.js');
    const employee = require('../controllers/employee.controller.js');
    const project = require('../controllers/project.controller.js');

    const myApiUrlClient = '/api/client';
    const myApiUrlEmployee = '/api/employee';
    const myApiUrlProject = '/api/project';

    // Create
    app.post(myApiUrlClient, client.createClient);
    app.post(myApiUrlEmployee, employee.createEmployee);
    app.post(myApiUrlProject, project.createProject);

    // FindAll
    app.get(myApiUrlClient, client.findAllClient);
    app.get(myApiUrlEmployee, employee.findAllEmployee);
    app.get(myApiUrlProject, project.findAllProject);

    // FindOne
    app.get(myApiUrlClient + '/:id', client.findOneClient);
    app.get(myApiUrlEmployee + '/:id', employee.findOneEmployee);
    app.get(myApiUrlProject + '/:id', project.findOneProject);

    // Update
    app.put(myApiUrlClient + '/:id', client.updateClient);
    app.put(myApiUrlEmployee + '/:id', employee.updateEmployee);
    app.put(myApiUrlProject + '/:id', project.updateProject);

    // Delete
    app.delete(myApiUrlClient + '/:id', client.deleteClient);
    app.delete(myApiUrlEmployee + '/:id', employee.deleteEmployee);
    app.delete(myApiUrlProject + '/:id', project.deleteProject);
}
