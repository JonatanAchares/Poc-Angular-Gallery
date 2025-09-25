import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

//                  " gallery.spec.ts es un archivo de pruebas unitarias de la galería "

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent]   // ✅ usamos imports en vez de declarations
    })
      .compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
