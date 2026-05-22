/// <reference types="vite/client" />

import type { cn } from '@/shared/utils/cn';

declare module 'vue' {
  export interface ComponentCustomProperties {
    $cn: typeof cn;
  }
}
