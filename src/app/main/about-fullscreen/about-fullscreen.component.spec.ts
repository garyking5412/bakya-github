import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFullscreenComponent } from './about-fullscreen.component';

describe('AboutFullscreenComponent', () => {
  let component: AboutFullscreenComponent;
  let fixture: ComponentFixture<AboutFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFullscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
