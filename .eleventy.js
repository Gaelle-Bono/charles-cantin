module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/services');

  eleventyConfig.addWatchTarget('src/js');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addWatchTarget('src/css');

  //remove "/src/" from the path
  eleventyConfig.addFilter("formatPath", function(name) {
    return name.slice(4);
   });
   
   //keep only the name of the photo without path and without extension
  eleventyConfig.addFilter("removeExt", function(name) {
    return name.slice(name.lastIndexOf("/")+1, name.length-4);
   });
   
  return {
      dir: {
          input: 'src',
      },
  };
};