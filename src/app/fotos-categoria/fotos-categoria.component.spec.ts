import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosCategoriaComponent } from './fotos-categoria.component';

describe('FotosCategoriaComponent', () => {
  let component: FotosCategoriaComponent;
  let fixture: ComponentFixture<FotosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotosCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
