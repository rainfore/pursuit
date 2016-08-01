import restate from 'regular-state';
import { Component } from 'rgui-ui-base';

// Modules
import App from './module';
import Record from './module/record';
import RecordDetail from './module/record/detail';

router = restate({view: document.getElementById('view'), Component: Component})
    .state('app', App, '')
    .state('app.record', Record)
    .state('app.record.detail', RecordDetail);

export default router;
