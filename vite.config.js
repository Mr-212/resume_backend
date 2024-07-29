import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path'
// import { viteExternalsPlugin } from 'vite-plugin-externals'
// import html2canvas from 'html2canvas';

export default defineConfig({


    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
        }
    },

    plugins: [
        // laravel({
        //     input: ['resources/css/app.css', 'resources/js/app.tsx'],
        //     refresh: true,

        // }, react()),

        laravel(
            ['resources/css/app.css', 'resources/js/app.tsx'],
            react()),

    ],

    resolve:{
        alias:{
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),

        }

    },

    build: {
        rollupOptions: {
        //   external: 'react-dom/client'
        }
      },
});
