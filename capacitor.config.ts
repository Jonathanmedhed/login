import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.subscriptions.subs',
  appName: 'subscriptions',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
