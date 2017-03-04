import { FastMedPage } from './app.po';

describe('fast-med App', () => {
  let page: FastMedPage;

  beforeEach(() => {
    page = new FastMedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
