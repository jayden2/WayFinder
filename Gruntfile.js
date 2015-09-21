module.exports = function(grunt) {
	//config tasks
	grunt.initConfig({
		copy: {
			build: {
				cwd: 'src',
				src: [ '*', 'bower_components/**/*.min.js', 'bower_components/**/*.min.css',
				'bower_components/**/*-min.css', 'css/', 'images/**', 'js/', 'views/**',
				'bower_components/font-awesome/fonts/**'],
				dest: 'build',
				expand: true
			},
		},
		clean: {
			build: {
				src: [ 'build' ]
			},
		},
		sass: {
			build: {
				files: {
					'build/css/main.css': 'src/css/main.sass'
				}
			}
		},
		htmlmin: {
			build: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
				},
				files: {
					'build/index.html': 'build/index.html',
					'build/views/dashboard.html': 'build/views/dashboard.html',
					'build/views/editor.html': 'build/views/editor.html'
				}
			}
		},
		cssmin: {
			build: {
				files: {
					'build/css/main.css': [ 'build/css/*.css' ],
					'src/css/main.css': [ 'src/css/*.css' ]
				}
			}
		},
		uglify: {
			build: {
				options: {
					mangle: false
				},
				files: {
					'build/js/app.min.js': ['src/js/app.js'],
					'build/js/functions.min.js': ['src/js/functions.js'],
					'build/js/services/dashboardService.min.js': ['src/js/services/dashboardService.js'],
					'build/js/services/mapService.min.js': ['src/js/services/mapService.js'],
					'build/js/controllers/DashboardController.min.js': ['src/js/controllers/DashboardController.js'],
					'build/js/controllers/EditorController.min.js': ['src/js/controllers/EditorController.js'],
					'src/js/app.min.js': ['src/js/app.js'],
					'src/js/functions.min.js': ['src/js/functions.js'],
					'src/js/services/dashboardService.min.js': ['src/js/services/dashboardService.js'],
					'src/js/services/mapService.min.js': ['src/js/services/mapService.js'],
					'src/js/controllers/DashboardController.min.js': ['src/js/controllers/DashboardController.js'],
					'src/js/controllers/EditorController.min.js': ['src/js/controllers/EditorController.js']
				}
			}
		},
		watch: {
			stylesheets: {
				files: 'src/**/*.sass',
				tasks: [ 'style' ]
			},
			scripts: {
				files: 'src/js/**/*.js',
				tasks: [ 'uglify' ]
			},
			html: {
				files: 'src/*.html',
				tasks: [ '' ]
			}
		},
		connect: {
			server: {
				options: {
					port: 4000,
					base: 'build',
					hostname: '*'
				}
			}
		},
	});
	//load tasks
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//define tasks
	grunt.registerTask('default',
		'Watches the project for changes, automatically builds them and runs a server.',
		[ 'build', 'connect', 'watch' ]);
	grunt.registerTask('build',
		'Compiles all assets and copies the files to the build directory',
		[ 'clean', 'copy', 'style', 'uglify' ]);
	grunt.registerTask('style',
		'Compile and clean the style sheets',
		[ 'sass', 'cssmin' ]);
	grunt.registerTask('minify',
		'Minify javascript and css files',
		[ 'htmlmin', 'cssmin' , 'uglify']);
};