require('ts-node/register'); //run ts files through node
let helpers = require('./helpers');

exports.config = {
    baseUrl: 'http://localhost:8000/',

    // use `npm run e2e`
    specs: [
        helpers.root('tests/*/*.spec.ts')
    ],

    framework: 'jasmine2',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                '--disable-web-security',
                'show-fps-counter=true',
                '--disable-impl-side-painting'
            ]
        }
    },

    onPrepare: function () {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot()
                .then(function (png) {
                    allure.createAttachment('Screenshot', function () {
                        return new Buffer(png, 'base64')
                    }, 'image/png')();
                    done();
                })
        });
    },

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     */
    useAllAngular2AppRoots: true
};
