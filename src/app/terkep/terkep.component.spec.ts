import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TerkepComponent } from './terkep.component';

describe('TerkepComponent', () => {
  let component: TerkepComponent;
  let fixture: ComponentFixture<TerkepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerkepComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerkepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
