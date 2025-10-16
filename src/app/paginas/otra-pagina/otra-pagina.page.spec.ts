import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtraPaginaPage } from './otra-pagina.page';

describe('OtraPaginaPage', () => {
  let component: OtraPaginaPage;
  let fixture: ComponentFixture<OtraPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtraPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
