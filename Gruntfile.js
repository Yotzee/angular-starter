'use strict';

module.exports = function (grunt) {
    var config = {
        // Project settings
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.loadNpmTasks('grunt-asset-injector');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-wait');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        injector: {
            options: { },
            local_dependencies: {
                files: {
                    'client/index.html': ['client/**/*.js', 'client/**/*.css', 'bower.json']
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server/server.js'
                }
            },
            prod: {
                options: {
                    script: 'server/server.js',
                    node_env: 'production'
                }
            }
        },
        watch: {
            injectJS: {
                files: [
                    'client/**/*.js'],
                tasks: ['injector:scripts']
            },
            injectCss: {
                files: [
                    'client/**/*.css'
                ],
                tasks: ['injector:css']
            },
            livereload: {
                files: [
                    'client/**/*.css',
                    'client/**/*.html',
                    'client/**/*.js'
                ],
                options: {
                    livereload: {
                        port: 35729
                    }
                }
            },
            express: {
                files: [
                    'server/**/*.{js,json}'
                ],
                tasks: ['express:dev', 'wait'],
                options: {
                    livereload: {
                        port: 35729,
                    },
                    nospawn: true //Without this option specified express won't be reloaded
                }
            }
        },
        open: {
            browser: {
                url: 'http://localhost:8000'
            }
        }

    });

    grunt.registerTask('wait', function () {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function () {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });

    grunt.registerTask('default', function (target) {
        grunt.task.run([
            //'injector:sass',
            'injector',
            'injector',
            'express:dev',
            'wait',
            'open',
            'watch'
        ]);
    });

    //grunt.loadTasks('tasks');

};
