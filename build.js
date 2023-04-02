import Browserify from 'browserify';
import fs from 'fs';
import esmify from 'esmify';

var bundler = Browserify({
    // Required watchify args
    cache: {}, 
    packageCache: {}, 
    fullPaths: false,
    // Browserify Options
    entries: './attachmediastream.js',
    debug: true,
    plugin: [
        [ esmify, { /* ... options ... */ } ]
    ]
});

bundler.bundle()
    .pipe(fs.createWriteStream('attachmediastream.bundle.js'));

// bundle.add('./attachmediastream');
// bundle.bundle({standalone: 'attachMediaStream'}).pipe(fs.createWriteStream('attachmediastream.bundle.js'));
