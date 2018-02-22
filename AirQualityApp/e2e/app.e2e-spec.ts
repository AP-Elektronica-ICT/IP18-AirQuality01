import { AirQualityAppPage } from './app.po';

describe('air-quality-app App', () => {
  let page: AirQualityAppPage;

  beforeEach(() => {
    page = new AirQualityAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
