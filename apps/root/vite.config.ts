/// <reference types='vitest' />
import angular from '@analogjs/vite-plugin-angular';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    root: dirname(fileURLToPath(import.meta.url)),
    cacheDir: '../../node_modules/.vite/apps/root',
    plugins: [angular(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    // Uncomment this if you are using workers.
    // worker: {
    //   plugins: () => [ nxViteTsPaths() ],
    // },
    test: {
      name: 'root',
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.spec.ts'],
      setupFiles: ['src/test-setup.ts'],
      reporters: ['default'],
      coverage: {
        enabled: true,
        reportsDirectory: '../../coverage/apps/root',
        provider: 'v8' as const,
      },
    },
  };
});
