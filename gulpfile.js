const gulp = require("gulp");
const terser = require("gulp-terser");
const del = require("del");
const ts = require("gulp-typescript");
const rename = require("gulp-rename");

function clean() {
  return del(["dist"]);
}

function config() {
  return gulp
    .src("./src/config/prod.env")
    .pipe(rename({ basename: "index" }))
    .pipe(gulp.dest("./dist/src/config/"));
}

function server() {
  return gulp
    .src("./src/**/*.ts")
    .pipe(
      ts({
        target: "es5",
        module: "commonjs",
        strict: true,
        noImplicitAny: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noFallthroughCasesInSwitch: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
      })
    )
    .pipe(terser())
    .pipe(gulp.dest("./dist/src/"));
}

function dependencies() {
  return gulp.src("./package*.json").pipe(gulp.dest("./dist/"));
}

function dockerfile() {
  return gulp.src("./res/Dockerfile").pipe(gulp.dest("./dist/"));
}

function dockerCompose() {
  return gulp.src("./res/docker-compose.yml").pipe(gulp.dest("./dist/"));
}

function watch() {
  gulp.watch("./src/**/*.ts", server);
  gulp.watch("./src/config/*.env", config);
}

const build = gulp.series(
  clean,
  gulp.parallel(config, server, dependencies, dockerfile, dockerCompose)
);

exports.watch = watch;
exports.default = build;
