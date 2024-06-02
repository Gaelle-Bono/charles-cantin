//const yaml = require("js-yaml");


module.exports = function (eleventyConfig) {

  // To Support .yaml Extension in _data
  //eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));


  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/photos');

  eleventyConfig.addPassthroughCopy('src/uploads');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/services');

  eleventyConfig.addWatchTarget('src/js');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addWatchTarget('src/css');


  //Filter using `Array.filter`
  eleventyConfig.addCollection("portraits", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "portrait";
    });
  });

  //Filter using `Array.filter`
  eleventyConfig.addCollection("couples", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "couple";
    });
  });

    //Filter using `Array.filter`
    eleventyConfig.addCollection("marriages", function (collectionApi) {
      return collectionApi.getAll().filter(function (item) {
        return item.data.category === "marriage";
      });
    });

  //Filter using `Array.filter`
  eleventyConfig.addCollection("pregnancies", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "pregnancy";
    });
  });

  //Filter using `Array.filter`
  eleventyConfig.addCollection("babies", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "baby";
    });
  });

  //Filter using `Array.filter`
  eleventyConfig.addCollection("baptismes", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "baptism";
    });
  });

  //Filter using `Array.filter`
  eleventyConfig.addCollection("families", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "family";
    });
  });

  eleventyConfig.addFilter("removeExt", function(name) {
    return name.slice(name.lastIndexOf("/")+1, name.length-4);
   });

  return {
      dir: {
          input: 'src',
      },
  };
};