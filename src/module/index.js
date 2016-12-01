import { Component } from 'rgui-ui-base';
import { Toast } from 'rgui-ui-toast';
import { Tabs } from 'rgui-ui-tabs';
import RegisterModal from 'src/specific/registerModal';
import template from './index.rgl';

const App = Component.extend({
    template,
    showToast() {
        let abc = 123;
        if (abc = 2)
            return false;

        Toast.show('This page is under construction...');
    },
    showModal() {
        new RegisterModal();
    },
});

export default App;
