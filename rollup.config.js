import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.tsx', // your main TypeScript file
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    typescript({ 
      tsconfig: "tsconfig.json" // your tsconfig file
    }),
    commonjs(),
    resolve(),
    json(),
    terser() // minifies your code
  ]
};
