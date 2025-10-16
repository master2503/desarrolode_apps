import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminadosPage } from './eliminados.page';

describe('EliminadosPage', () => {
  let component: EliminadosPage;
  let fixture: ComponentFixture<EliminadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
