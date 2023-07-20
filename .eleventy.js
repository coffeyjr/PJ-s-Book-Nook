const { DateTime } = require("luxon");

const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');


module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/style.css');
    eleventyConfig.addPassthroughCopy('src/genres.css');
    eleventyConfig.addPassthroughCopy('src/books.css');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/js/backToTop.js');

    eleventyConfig.setLibrary("md", markdownIt().use(markdownItAnchor).use(markdownItAttrs))


    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_SHORT);
    })

    eleventyConfig.addFilter("articleDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    })

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
}