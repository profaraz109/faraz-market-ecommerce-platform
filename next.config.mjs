import path from 'node:path';
import { existsSync } from 'node:fs';

const hostinger =
  process.env.HOSTINGER_BUILD === '1' ||
  existsSync(path.resolve(process.cwd(), 'hostinger-package.json'));

const nextConfig = {
  webpack(config, { webpack }) {
    if (hostinger) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@\/lib\/platform$/,
          path.resolve(process.cwd(), 'runtime/hostinger.ts')
        )
      );
    }
    return config;
  },
  serverExternalPackages: ['nodemailer', 'mysql2'],
};

export default nextConfig;
