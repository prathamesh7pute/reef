module.exports = function (grunt) {

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
					'src/public/js/lib/jquery.js': 'components/jquery/jquery.js',
					'src/public/js/lib/underscore.js': 'components/underscore/underscore.js',
					'src/public/js/lib/backbone.js': 'components/backbone/backbone.js',
					'src/public/js/lib/handlebars.runtime.js': 'components/handlebars/handlebars.runtime.js',
					'src/public/js/lib/require.js': 'components/requirejs/require.js'
				}
			},
			csslibs: {
				files: {
					'src/public/css/bootstrap.css': 'components/bootstrap/docs/assets/css/bootstrap.css',
					'src/public/css/bootstrap-responsive.css': 'components/bootstrap/docs/assets/css/bootstrap-responsive.css'
					'src/public/img/glyphicons-halflings-white.png': 'components/bootstrap/img/glyphicons-halflings-white.png'
					'src/public/img/glyphicons-halflings.png': 'components/bootstrap/img/glyphicons-halflings.png'
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