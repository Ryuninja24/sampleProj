import { MyfirstPage } from './app.po';

describe('myfirst App', function() {
  let page: MyfirstPage;

  beforeEach(() => {
    page = new MyfirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
