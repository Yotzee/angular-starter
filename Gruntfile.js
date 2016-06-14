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

    grunt.initConfig(require('./GruntConfig'));

    grunt.registerTask('wait', function () {
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

};
