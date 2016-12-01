import { Modal } from 'rgui-ui-modal';
import contentTemplate from './index.rgl';

const RegisterModal = Modal.extend({
    config() {
        this.defaults({
            title: '注册',
            contentTemplate,
            class: 'm-modal-register',
            username: '',
            password: '',
        });
        this.supr();
    },
    ok() {
        this.$emit('ok', {
            sender: this,
            username: this.data.username,
            password: this.data.password,
        });
        this.close();
    }
});

export default RegisterModal;
