/**
 * Los archivos .spec.ts se generan para tests unitarios escritos
 * con Jasmine(framework de testing) y ejecutados con Karma (test
 * runner que viene configurado por defecto en Angular)
 * Se podrían borrar si no vamos a hacer testing automatizado
 */
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-gallery');
  });
});
