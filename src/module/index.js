import { Component } from 'rgui-ui-base';
import { Toast } from 'rgui-ui-toast';
import { Tabs } from 'rgui-ui-tabs';
import { Modal } from 'rgui-ui-modal';
import template from './index.rgl';

const App = Component.extend({
    template,
    showToast() {
        Toast.show('This page is under construction...');
    },
    showModal() {
        Modal.alert('This is a modal.');
    }
});

export default App;
