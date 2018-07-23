import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { VotingComponent } from './voting.component';

describe('VotingComponent', () => {
  let component: VotingComponent;
  let fixture: ComponentFixture<VotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the vote when upvoted', () => {
    // Arrange
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;
    const button = fixture.debugElement.query(By.css('#up-vote'));
    // Act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    const votes = fixture.debugElement.query(By.css('.votes'));
    expect(votes.nativeElement.textContent).toBe(component.votes.toString());
  });

  it("should decrease the vote when upvoted", () => {
    // Arrange
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;
    const button = fixture.debugElement.query(By.css("#down-vote"));
    component.votes = 2;
    // Act
    button.triggerEventHandler("click", null);
    fixture.detectChanges();
    // Assert
    const votes = fixture.debugElement.query(By.css(".votes"));
    expect(votes.nativeElement.textContent).toBe(component.votes.toString());
  });
});
