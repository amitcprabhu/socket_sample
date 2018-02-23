import { SampleSocketAppPage } from './app.po';

describe('sample-socket-app App', function() {
  let page: SampleSocketAppPage;

  beforeEach(() => {
    page = new SampleSocketAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
