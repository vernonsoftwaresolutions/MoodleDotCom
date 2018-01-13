import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSitesComponent } from './search-sites.component';
import {SearchSiteService } from './search-sites.service';

describe('SearchSitesComponent', () => {
  let component: SearchSitesComponent;
  let fixture: ComponentFixture<SearchSitesComponent>;
  let service: SearchSiteService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
