const {DateTime} = require("luxon");

module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/blog/*.md"); // Adjust this path as needed
      });
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // ISO date for datetime attributes
    eleventyConfig.addFilter("isoDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISODate();
    });

    return{
        dir: {
            input: "src",
            output: "_site"
        },
    };
};