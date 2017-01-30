module.exports = function( grunt ) {
  require( "load-grunt-tasks" )( grunt );

  grunt.initConfig( {
    pkg: grunt.file.readJSON( 'package.json' ),

    jshint: {
      files: [ 'Gruntfile.js', 'src/*.js' ],
      options: {
        globals: {
          jQuery: true
        },
        esversion: 6,
        asi: true
      }
    },

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'es5/main.js' : 'src/main.js'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/main.min.js' : 'es5/main.js'
        }
      }
    },

    sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
          'style.css' : 'stylesheets/style.scss'
        }
      }
    },

    watch: {
      src: {
        files: [ '<%= jshint.files %>' ],
        tasks: [ 'jshint', 'babel' ]
      },
      sass: {
        files: [ 'stylesheets/**/*.scss' ],
        tasks: [ 'sass' ]
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watchall: {
        tasks: [ 'watch:src', 'watch:sass' ]
      }
    }
  } );

  grunt.registerTask( 'default', [ 'jshint', 'babel', 'uglify', 'sass' ] );
  grunt.registerTask( 'js', [ 'jshint', 'babel', 'uglify' ] );
  grunt.registerTask( 'watchall', [ 'concurrent:watchall' ] );
};
