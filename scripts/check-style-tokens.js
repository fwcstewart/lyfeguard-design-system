#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'packages', 'components', 'src');
const colorPattern = /(#[0-9a-fA-F]{3,8}\b)|(rgba?\()|(hsla?\()/;
const violations = [];

function walk(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.css.ts')) {
      lintFile(fullPath);
    }
  }
}

function lintFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, index) => {
    if (colorPattern.test(line)) {
      violations.push({ filePath, line: index + 1, content: line.trim() });
    }
  });
}

walk(ROOT);

if (violations.length > 0) {
  console.error('\nToken lint failed. Found hard-coded colour/shadow values in component styles:');
  violations.forEach(({ filePath, line, content }) => {
    console.error(`- ${path.relative(process.cwd(), filePath)}:${line} -> ${content}`);
  });
  console.error('\nUse tokens from globals.css.ts (vars.color, vars.shadow, vars.spacing, etc.) instead of literal values.');
  process.exit(1);
}

console.log('Token lint passed: no hard-coded colour/shadow values detected in component styles.');
