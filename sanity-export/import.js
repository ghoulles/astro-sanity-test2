const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');
const sanityImport = require('@sanity/import');
const Configstore = require('configstore');

const config = new Configstore('sanity', {}, { globalConfigPath: true });
const token = config.get('authToken');
const projectId = process.argv[2];

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || projectId,
    dataset: process.env.SANITY_DATASET || 'production',
    token: process.env.SANITY_TOKEN || token,
    apiVersion: '2024-01-31',
    useCdn: false
});

const inputFilePath = path.join(__dirname, 'export.tar.gz');
console.log(`Reading file from: ${inputFilePath}`);

if (!fs.existsSync(inputFilePath)) {
    console.error(`File not found: ${inputFilePath}`);
    process.exit(1);
}

const input = fs.createReadStream(inputFilePath);

input.on('error', (err) => {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
});

sanityImport(input, {
    client: client,
    operation: 'createOrReplace' // `create`, `createOrReplace` or `createIfNotExists`
})
    .then(({ numDocs, warnings }) => {
        console.log('imported %d documents', numDocs);
        console.log('warnings:', warnings);
        // Note: There might be warnings! Check `warnings`
    })
    .catch((err) => {
        console.error('Import failed: %s', err.message);
    });
