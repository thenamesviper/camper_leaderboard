export class CAMPERLEADERBOARDPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('camper-leaderboard-app h1')).getText();
  }
}
