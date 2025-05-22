#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const projectRoot = process.cwd();
const packageJsonPath = path.join(projectRoot, 'package.json');
const jestConfigPath = path.join(projectRoot, 'jest.config.ts');

function readPackageJson(): any {
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
}

function savePackageJson(pkg: any): void {
  fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');
}

function hasPackageJsonJest(): boolean {
  const pkg = readPackageJson();
  return pkg.hasOwnProperty('jest');
}

function hasJestConfigTs(): boolean {
  return fs.existsSync(jestConfigPath);
}

function prompt(question: string): Promise<boolean> {
  return new Promise((resolve) => {
    process.stdout.write(`${question} (s/n): `);
    process.stdin.setEncoding('utf8');
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim().toLowerCase() === 's');
    });
  });
}

async function fixConflict() {
  const hasJestKey = hasPackageJsonJest();
  const hasJestFile = hasJestConfigTs();

  if (hasJestKey && hasJestFile) {
    console.log('⚠️  Conflicto detectado entre jest.config.ts y la clave "jest" en package.json.');

    const removeFromPackage = await prompt('¿Deseas eliminar la clave "jest" del package.json y usar jest.config.ts?');
    if (removeFromPackage) {
      const pkg = readPackageJson();
      delete pkg.jest;
      savePackageJson(pkg);
      console.log('✅ Clave "jest" eliminada del package.json.');
    } else {
      console.log('❌ No se hicieron cambios. El conflicto persistirá.');
      return;
    }
  } else {
    console.log('✅ No se detectaron conflictos de configuración de Jest.');
  }

  try {
    console.log('🏃 Ejecutando pruebas: npm run test:schema ...');
    const result = execSync('npm run test:schema', { encoding: 'utf-8' });
    console.log(result);
  } catch (err: any) {
    console.error('❌ Error al ejecutar las pruebas:', err.message);
  }
}

fixConflict();
