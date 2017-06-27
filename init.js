exports.configure = [
  {
    name: 'name',
    message: 'What is the name of your project?'
  }, {
    name: 'description',
    message: 'Describe your project'
  }, {
    name: 'github_username',
    message: 'What is your github username?'
  }
];

exports.after = (util, config) => {
  if (!config.production) util.target.remove('app.production.js')
};
