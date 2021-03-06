/* global module:true*/
module.exports = function(grunt){
  grunt.initConfig({
    htmlhint:{
      options:{
        htmlhintrc:'.htmlhintrc'
      },
      src:['*.html']
    },

    csslint:{
      options:{
        csslintrc:'.csslintrc'
      },
      src:['css/*.css','./com/**/*.css']
    },

    eslint:{
      options:{
        configFile:'.eslintrc.json'
      },
      target:['./js/*.js','./com/**/*.js']
    },

    copy:{
      html:{
        src:'./index.html',
        dest:'./dist/index.html'
      }
    },

    useminPrepare:{
      html:'index.html',
      options:{
        dest:'dist'
      }
    },

    uglify:{
      'dist/bundle.min.js':'dist/bundle.js'
    },


    htmlmin:{
      options:{
        collapseWhitespace:true,
        preserveLineBreaks:false
      },
      files:{
        src:'dist/index.html',
        dest:'dist/index.html'
      }
    },

    concat:{
      js:{
        src:['js/*.js','./com/**/*.js'],
        dest:'dist/bundle.js'
      },
      css:{
        src:['css/*.css','./com/**/*.css'],
        dest:'dist/bundle.css'
      }
    },

    cssmin:{
      'dist/bundle.min.css':'dist/bundle.css'
    },
  
    clean:{
      end:['dist/bundle.css','dist/bundle.js','.tmp']
    },

    usemin:{
      options:{
        assetsDirs:['dist/']
      },
      html:'dist/index.html'

    }

  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('lint',['htmlhint','csslint','eslint']);
  grunt.registerTask('build',['copy','useminPrepare','concat','uglify','cssmin','usemin','htmlmin','clean']);
  

};
