import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NytApiComponent } from './nyt-api.component';

describe('NytApiComponent', () => {
  let component: NytApiComponent;
  let fixture: ComponentFixture<NytApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NytApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NytApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
