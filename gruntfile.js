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
			libs: {
				files: {
					'src/public/js/lib/jquery.js': 'components/jquery/jquery.js',
					'src/public/js/lib/underscore.js': 'components/underscore/underscore.js',
					'src/public/js/lib/backbone.js': 'components/backbone/backbone.js',
					'src/public/js/lib/require.js': 'components/requirejs/require.js'
				}
			},
			csslibs: {
				files: {
					'src/public/css/bootstrap.css': 'components/bootstrap/docs/assets/css/bootstrap.css',
					'src/public/css/bootstrap-responsive.css': 'components/bootstrap/docs/assets/css/bootstrap-responsive.css'
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

	grunt.registerTask('test', ['copy']);
	grunt.registerTask('default', ['jshint']);

};