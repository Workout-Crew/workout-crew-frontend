import { ScreenList, navigationRef } from '../routes/types';
import { NODE_ENV } from '@env';
import { bridge, createWebView } from '@webview-bridge/react-native';

export const registerBridge = bridge({
  async getPhoto() {
    return 'abc';
  },
  async navigate(name: ScreenList) {
    if (navigationRef.current?.isReady()) {
      navigationRef.current.navigate(name);
    }
  },
});

export type RegisterBridge = typeof registerBridge;

export const { WebView } = createWebView({ bridge: registerBridge, debug: NODE_ENV === 'development' });
