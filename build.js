import Browserify from 'browserify';
import fs from 'fs';
import babelify from 'babelify';

var bundler = Browserify({
    // Required watchify args
    cache: {}, 
    packageCache: {}, 
    fullPaths: false,
    // Browserify Options
    standalone: 'attachMediaStream',
    entries: './attachmediastream.js',
    debug: true,
    plugin: []
});

bundler
    .transform(babelify.configure({
        presets : ["@babel/preset-env"]
    }))
    .bundle((err, src) => {
        if(err) {
            console.log('[error]', err);
            return;
        }
        if(src) {
            console.log("Bundling Ok")
        }
    })
    .pipe(fs.createWriteStream('attachmediastream.bundle.js'));

// bundle.add('./attachmediastream');
// bundle.bundle({standalone: 'attachMediaStream'}).pipe(fs.createWriteStream('attachmediastream.bundle.js'));
