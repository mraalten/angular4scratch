import { Angular4scratchPage } from './app.po';

describe('angular4scratch App', () => {
  let page: Angular4scratchPage;

  beforeEach(() => {
    page = new Angular4scratchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
