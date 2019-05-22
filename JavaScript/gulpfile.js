const gulp = require('gulp'); // 걸프 의존성은 이 아래에 적음
const babel = require('gulp-babel');


gulp.task('default', function(){
    //걸프 작업을 여기 씁니다.
    
    //노드소스
   gulp.src("es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));

    //브라우저 소스
    gulp.src("public/es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("public/dist"));
});
