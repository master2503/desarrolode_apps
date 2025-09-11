import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteApiComponent } from './componente-api.component';

describe('ComponenteApiComponent', () => {
  let component: ComponenteApiComponent;
  let fixture: ComponentFixture<ComponenteApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
