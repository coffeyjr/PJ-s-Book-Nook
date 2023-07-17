const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/style.css');
    eleventyConfig.addPassthroughCopy('src/genres.css');
    eleventyConfig.addPassthroughCopy('src/books.css');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/fonts');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
}