import * as React from 'react';

export const injectState = store => (Component: any) => () => <Component store={store} />;