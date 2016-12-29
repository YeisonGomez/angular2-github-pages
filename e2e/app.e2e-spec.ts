import { YeisonGomezPage } from './app.po';

describe('yeison-gomez App', function() {
  let page: YeisonGomezPage;

  beforeEach(() => {
    page = new YeisonGomezPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
