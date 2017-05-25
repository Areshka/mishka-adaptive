var gulp = require('gulp'), //подключаем пакеты Gulp из папки node_modules в наш проект
    less = require('gulp-less'); //Подключаем Less пакет

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src('app/less/style.less') // Берем источник
    .pipe(less()) // Преобразуем less в CSS посредством gulp-less
    .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});
