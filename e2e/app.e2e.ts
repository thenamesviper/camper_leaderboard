import { CAMPERLEADERBOARDPage } from './app.po';

describe('camper-leaderboard App', function() {
  let page: CAMPERLEADERBOARDPage;

  beforeEach(() => {
    page = new CAMPERLEADERBOARDPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('camper-leaderboard works!');
  });
});
