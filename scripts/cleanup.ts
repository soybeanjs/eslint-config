#!/usr/bin/env zx
import { $ } from 'zx';

// eslint-disable-next-line no-unused-expressions
$`pnpm rimraf node_modules ./**/node_modules pnpm-lock.yaml ./**/pnpm-lock.yaml`;
