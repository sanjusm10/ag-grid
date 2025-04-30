import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAgGridComponent } from './server-ag-grid.component';

describe('ServerAgGridComponent', () => {
  let component: ServerAgGridComponent;
  let fixture: ComponentFixture<ServerAgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerAgGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServerAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
