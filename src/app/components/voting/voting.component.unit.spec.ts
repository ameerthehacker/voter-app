import { VotingComponent } from './voting.component';

describe('Voting Component Unit', () => {
  let votingComponent;

  beforeEach(() => {
    // Arrange
    votingComponent = new VotingComponent();
  });

  it('should upvote correctly', () => {
    // Act
    votingComponent.upVote();
    // Assert
    expect(votingComponent.votes).toBe(1);
  });

  it("should upvote correctly", () => {
    // Arrange
    votingComponent.votes = 1;
    // Act
    votingComponent.downVote();
    // Assert
    expect(votingComponent.votes).toBe(0);
  });

  it('should not downvote below 0', () => {
    // Act
    votingComponent.downVote();
    // Assert
    expect(votingComponent.votes).toBe(0);
  });
});