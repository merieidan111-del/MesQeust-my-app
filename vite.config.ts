import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import {handleSummarize, handleGenerateQcm} from './src/server/geminiHandler.ts';

function geminiApiPlugin(): Plugin {
  return {
    name: 'gemini-api-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/gemini/')) {
          return next();
        }

        const parseBody = (): Promise<any> => {
          return new Promise((resolve, reject) => {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                resolve(body ? JSON.parse(body) : {});
              } catch (e) {
                reject(e);
              }
            });
            req.on('error', reject);
          });
        };

        res.setHeader('Content-Type', 'application/json');

        try {
          if (req.url === '/api/gemini/summarize' && req.method === 'POST') {
            const body = await parseBody();
            const result = await handleSummarize(body);
            res.statusCode = 200;
            res.end(JSON.stringify(result));
            return;
          }

          if (req.url === '/api/gemini/generate-qcm' && req.method === 'POST') {
            const body = await parseBody();
            const questions = await handleGenerateQcm(body);
            res.statusCode = 200;
            res.end(JSON.stringify({ questions }));
            return;
          }

          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'Endpoint not found' }));
        } catch (error: any) {
          console.error('Gemini API Error:', error);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: error?.message || 'Internal Server Error' }));
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), geminiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

