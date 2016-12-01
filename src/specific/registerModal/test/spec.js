import RegisterModal from '../';

describe('RegisterModal', () => {
    it('should emit data after Ok', () => {
        const registerModal = new RegisterModal();

        registerModal.data.username = 'user';
        registerModal.data.password = 'pass';

        registerModal.$on('ok', ($event) => {
            expect($event.username).to.be('user');
            expect($event.password).to.be('pass');
        }).ok();
    });
});
