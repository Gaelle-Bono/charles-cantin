//const yaml = require("js-yaml");


module.exports = function (eleventyConfig) {

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  //eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));


  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/uploads');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/services');

  eleventyConfig.addWatchTarget('src/js');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addWatchTarget('src/css');

  eleventyConfig.addFilter("removeExt", function(name) {
    return name.slice(name.lastIndexOf("/")+1, name.length-4);
   });

  return {
      dir: {
          input: 'src',
      },
  };
};