module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: ['gruntfile.js', 'server/**/*.js', 'client/**/*.js'],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		less: {
			development: {
				files: {
					"server/app/public/styles/app.css": "client/app/less/app.less"
				}
			},
			production: {
				options: {
					yuicompress: true
				},
				files: {
					"server/app/public/styles/app.css": "client/app/less/app.less"
				}
			}
		},

		copy: {
			main: {
				expand: true,
				cwd: 'client/app/',
				src: ['scripts/**', 'index.html'],
				dest: 'server/app/public/',
			},
		},

		watch: {
			jshint: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			},
			styles: {
				files: ['client/app/less/**/*.less'],
				tasks: ['less:development']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['copy']);
	grunt.registerTask('optimize', ['requirejs']);
	grunt.registerTask('default', ['jshint']);

};