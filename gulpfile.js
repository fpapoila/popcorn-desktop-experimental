'use strict';
/* jshint node:true */

var electron = require('gulp-electron');
var gulp = require('gulp');
var util = require('gulp-util');

var packageJson = require('./build/package.json');

process.NODE_ENV = 'production';

gulp.task('electron', function() {

    gulp.src("")
    .pipe(electron({
        src: './build',
        packageJson: packageJson,
        release: './release',
        cache: './cache',
        version: 'v0.36.1',
        rebuild: false,
        packaging: false,
        asar: false,
        platforms: ['darwin-x64', 'win32-ia32', 'win32-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: packageJson.name,
                CFBundleIdentifier: packageJson.name,
                CFBundleName: packageJson.name,
                CFBundleVersion: packageJson.version,
                icon: './resources/icons/popcorntime.icns'
            },
            win: {
                "version-string": packageJson.version,
                "file-version": packageJson.version,
                "product-version": packageJson.version,
                "icon": 'resources/icons/popcorntime.ico'
            }
        }
    }))
    .pipe(gulp.dest(""));
});

gulp.task('default', ['electron']);
