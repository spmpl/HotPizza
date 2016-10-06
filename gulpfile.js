var gulp = require('gulp');

sass = require('gulp-sass'); //Подключаем Sass пакет
browserSync = require('browser-sync'); // Подключаем Browser Sync


gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('./sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('./dev/css/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'dev' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('./sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('./dev/css/style.css', browserSync.reload);
    gulp.watch('./dev/index.html', browserSync.reload);
});