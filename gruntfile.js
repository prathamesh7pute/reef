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
				}
			},
			server: {
				files: {
					'src/server.js': 'assets/server/server.js'
				}
			}
		},

		requirejs: {
			compile: {
				options: {

				}
			}
		},

		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['copy']);
	grunt.registerTask('optimize', ['requirejs']);
	grunt.registerTask('default', ['jshint']);

	grunt.registerMultiTask('requirejs', 'Build a RequireJS project.', function () {

		var done = this.async();
		var options = this.options({
			logLevel: 0,
			done: function (done, response) {
				done();
			}
		});
		grunt.verbose.writeflags(options, 'Options');

		console.log("yahoo");

		//requirejs.optimize(options, options.done.bind(null, done));
		done();
	});

};