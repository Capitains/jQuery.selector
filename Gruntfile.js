module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["./dist"],
    uglify: {
      options : {
        //beautify : true -> Need to figure out this stuff
      },
      all: {
        files: {
          'dist/jquery.cts.selector.min.js': ['dist/jquery.cts.selector.js'],
        }
      }
    },
    concat: {
      all: {
        files : {
          'dist/jquery.cts.selector.js'  : ['src/jquery.cts.selector.js' , 'src/i18n/*.js'],
          'dist/jquery.cts.selector.css' : ['src/css/jquery.cts.selector.css']
        }
      }
    },
    jslint: {
      all: ['src/*.js', 'src/**/*.js']
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        options : {
          singleRun : true,
          browsers : ["PhantomJS"]
        }
      }
    },
    release : {
      options: {
        additionalFiles: ['bower.json']
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task. 
  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('build', ['default']);
  grunt.registerTask('test', ['karma']);
  grunt.registerTask('rel', ['build', 'release']);
};
