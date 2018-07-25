import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getVoteText() {
    return element(by.css('.votes')).getText();
  }

  clickUpVote() {
    this.getUpVoteButton().click();
  }

  clickDownVote() {
    this.getDownVoteButton().click();
  }

  getUpVoteButton() {
    return element(by.css('#up-vote'));
  }

  getDownVoteButton() {
    return element(by.css("#down-vote"));
  }
}
