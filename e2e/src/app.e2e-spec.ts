import { AppPage } from './app.po';

describe('Voting', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display 0 by default', () => {
    // Assert
    expect(page.getVoteText()).toEqual('0');
  });

  it("should display 100 when upvoted 100 times", () => {
    // Act
    for(let i = 1; i <= 100; i++) {
      page.clickUpVote();
    }
    // Assert
    expect(page.getVoteText()).toEqual('100');
  });

  it("should display 0 when downvoted 101", () => {
    // Act
    for (let i = 1; i <= 101; i++) {
      page.clickDownVote();
    }
    // Assert
    expect(page.getVoteText()).toEqual("0");
  });


});
