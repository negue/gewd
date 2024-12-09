## Ng Error Overlay

### Installation

To get runtime errors immediately like with react's error-overlay. You just need to install
`npm install @gewd/ng-utils -S`

### Usage

```ts
// in your AppModule.ts

import { NgErrorOverlayModule } from '@gewd/ng-utils/ng-error-overlay';

// in the imports-array: 
[
    NgErrorOverlayModule
]
```

Thats it, now when an error happens, you'll get a full-screen overlay :tada:
