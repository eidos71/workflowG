import {LoginComponent} from './login.component';
import {AuthService} from "./AuthService";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


class MockAuthService extends AuthService{
    authenticated = false;

    isAuthenticated() {
        return this.authenticated;
    }
}

describe('Component: Login', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture <LoginComponent>
    let authService: AuthService;
    let el: DebugElement;
    let spy: any;

    beforeEach(() => {
        // service = new AuthService();
        // component = new LoginComponent(service);
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [AuthService]
        });

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.get(AuthService);
        //  get the "a" element by CSS selector (e.g., by class name)
        el = fixture.debugElement.query(By.css('a'));

    });

    afterEach(() => {
        authService = null;
        component = null;
    });


    it('canLogin return true when the user is not authenticaded', () => {
        spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });

    it('canLogin return false when the user is authenticaded', () => {
        spy = spyOn(authService, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });

    it('login button hidden when the user is authenticated', () => {
        expect(el.nativeElement.textContent.trim()).toBe('');
        
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        spyOn(authService, 'isAuthenticated').and.returnValue(true);
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });


});