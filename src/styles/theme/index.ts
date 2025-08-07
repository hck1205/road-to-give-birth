// src/styles/theme/index.ts
export { lightTheme } from './light';
export { darkTheme } from './dark';

import type { lightTheme } from './light';

export type AppTheme = typeof lightTheme;
