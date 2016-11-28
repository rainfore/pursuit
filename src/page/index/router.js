import restate from 'regular-state';
import { Component } from 'rgui-ui-base';

// Modules
import App from 'src/module';


// States
const router = restate({ view: '#view', Component, rebuild: true })
    .state('app', App, '')
    .on('notfound', () => router.go('app'));

export default router;
