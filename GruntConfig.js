var path = require('path');
module.exports = {
    injector: {
        app: {
            options:{
                transform: function (filepath) {
                    var e = path.extname(filepath).slice(1);
                    filepath = filepath.replace('/client/', '/');
                    filepath = filepath.replace('/bower_components/', '/');
                    
                    if (e === 'css') {
                        return '<link rel="stylesheet" href="' + filepath + '">';
                    } else if (e === 'js') {
                        return '<script src="' + filepath + '"></script>';
                    } else if (e === 'html') {
                        return '<link rel="import" href="' + filepath + '">';
                    }
                }

            },
            files: {
                'client/index.html': ['bower.json','client/**/*.js', 'client/**/*.css']
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

};