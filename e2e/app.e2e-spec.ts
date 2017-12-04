import { NgPrimeDemoPage } from './app.po';

describe('ng-prime-demo App', () => {
  let page: NgPrimeDemoPage;

  beforeEach(() => {
    page = new NgPrimeDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
