/**
 * Help commmand for build.
 *
 * Outputs the usage information for the build command.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist object.
 *   - `callback` {Function} is a completion callback.
 */

module.exports = function(argv, callback) {
    var help = [
        '',
        '  Usage: ' + argv.$0 + ' build <platform>',
        '',
        '  Synopsis:',
        '',
        '    Build your application to a specific platform.',
        '',
        '    The platform names are:',
        '',
        '      - android',
        '      - blackberry',
        '      - ios',
        '      - symbian',
        '      - webos',
        '      - winphone',
        '',
        '  Examples:',
        '',
        '    $ ' + argv.$0 + ' build android',
        '    $ ' + argv.$0 + ' build ios',
        ''
    ];

    console.log(help.join('\n'));

    callback(null);
};
