import { ShirtsPage } from './app.po';

describe('shirts App', function() {
  let page: ShirtsPage;

  beforeEach(() => {
    page = new ShirtsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
