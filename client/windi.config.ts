import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  extract: {
    include: ['**/*.tsx']
  }
});
