module.exports = {
  templates: `${__dirname}/_templates`,
  helpers: {
    lcFirst: ([first, ...rest]) => first.toLowerCase() + rest.join(''),
    ucFirst: ([first, ...rest]) => first.toUpperCase() + rest.join(''),
    projectRoot: __dirname,
  }
};
