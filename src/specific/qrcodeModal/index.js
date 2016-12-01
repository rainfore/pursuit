import { Modal } from 'rgui-ui-modal';
import contentTemplate from './index.rgl';

const QRCodeModal = Modal.extend({
    config() {
        this.defaults({
            cancelButton: false,
            contentTemplate,
        });
        this.supr();
    },
});

export default QRCodeModal;
