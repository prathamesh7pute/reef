0module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		copy: {
			jslibs: {
				files: {
					'src/public/js/lib/underscore.js': 'components/underscore/underscore.js',
					'src/public/js/lib/require.js': 'components/requirejs/require.js'
				}
			},
			csslibs: {
				files: {
				}
			},
			server: {
				files: {
					'src/server.js': 'assets/server/server.js'
				}
			},
			web: {
				files: [{
					expand: true,
					cwd: 'assets/web/',
					src: ['**'],
					dest: 'src/public/'
				}]

			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: "path/to/base",
					mainConfigFile: "path/to/config.js",
					out: "path/to/optimized.js"
				}
			}
		},

		handlebars: {
			compile: {
				options: {
					namespace: "JST"
				},
				files: {
					"path/to/result.js": "path/to/source.hbs",
					"path/to/another.js": ["path/to/sources/*.hbs", "path/to/more/*.hbs"]
				}
			}
		},

		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['copy']);
	grunt.registerTask('optimize', ['requirejs']);
	grunt.registerTask('default', ['jshint']);

};