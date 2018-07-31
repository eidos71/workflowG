import {AuthService} from './AuthService'

describe('Service: Auth', () => {

    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });

    it('Should return true when there is a token', () => {
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy();
    });

    it('Should return false when there is no token', () => {
        expect(service.isAuthenticated()).toBeFalsy();
    });





});