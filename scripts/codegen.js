#!/usr/bin/env node

const { join } = require('path');
const telescope = require('@osmonauts/telescope').default;

telescope({
    protoDirs: [
        'wasmd-0.25/proto',
        'wasmd-0.25/third_party/proto',
        'cosmos-sdk-0.45/proto',
        'cosmos-sdk-0.45/third_party/proto',
        'third_party'
    ],
    outPath: join(__dirname, '/../src'),
    options: {
        includePackageVar: true,
        typingsFormat: {
            useExact: true,
            timestamp: 'timestamp',
            duration: 'duration'
        },
        lcdClients: {
            enabled: false
        },
        rpcClients: {
            enabled: true,
            camelCase: false
        },
        aminoEncoding: {
            enabled: false
        }
    }
}).then(() => {
    console.log('✨ All Done!');
})
