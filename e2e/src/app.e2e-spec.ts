import { AppPage } from './app.po';

describe('Voting', () => {
  let page: AppPage;

  beforeEach(() => {
    // Arrange
    page = new AppPage();
    page.navigateTo();
  });

  it('should display 0 by default', () => {
    // Assert
    expect(page.getVoteText()).toEqual('0');
  });

  it("should display 1 when upvoted", () => {
    // Act
    page.clickUpVote();
    // Assert
    expect(page.getVoteText()).toEqual('1');
  });

  it("should display 1 when downvoted", () => {
    // Act
    page.clickUpVote();
    page.clickUpVote();
    page.clickDownVote();
    // Assert
    expect(page.getVoteText()).toEqual("1");
  });


});
