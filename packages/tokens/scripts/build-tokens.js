const StyleDictionary = require('style-dictionary');

// Build all configured platforms
StyleDictionary.extend(__dirname + '/../style-dictionary.config.js').buildAllPlatforms();
console.log('✨ Tokens built successfully');
