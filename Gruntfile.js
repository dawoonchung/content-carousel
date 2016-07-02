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
        esversion: 6
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

    watch: {
      files: [ '<%= jshint.files %>' ],
      tasks: [ 'jshint', 'babel', 'uglify' ]
    }
  } );

  grunt.registerTask( 'default', [ 'jshint', 'babel', 'uglify' ] );
};
