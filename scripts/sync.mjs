#!/usr/bin/env zx
import { fetch } from 'zx';

const requestUrl = 'https://npmmirror.com/sync/eslint-config-soybeanjs';

const pkgs = ['base', 'ts', '', 'vue', 'vue2', 'react', 'react-native', 'svelte', 'solid'];

const requestUrls = pkgs.map(item => requestUrl + (item ? `-${item}` : ''));

await Promise.all(requestUrls.map(url => fetch(url)));
