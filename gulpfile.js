const gulp = require("gulp");
const zip = require('gulp-zip');
var merge = require('merge-stream');


function bundle() {
  
  return gulp.src([
        "plugin.php",
        "license.txt",
        "readme.txt",
        "dist/**",
        "assets/**",
        "!node_modules/**",
        "!src/**",
        "!gulpfile.js",
        "!package.json",
        "!package-lock.json",
        "!webpack.config.js",
        "!.gitignore",

    ], { base : '.'}).pipe(zip('askteammate-wordart.zip'))
        .pipe(gulp.dest("bundled"));

}

exports.bundle = bundle;
