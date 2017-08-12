import Dashboard from "../common/pages/Dashboard";

let dashboard: Dashboard = new Dashboard();
let isPageOpened = false;
const NAV_BAR_HEADER = 'Tour of Heroes';
const NAV_BAR_DASHBOARD_BUTTON = 'Dashboard';
const NAV_BAR_HEROES_BUTTON = 'Heroes';
const TOP_HEROES_GRID_PAD_HEADER = 'Top Heroes';
const TOP_HEROES_GRID_PAD_RESULTS_COLOR = 'rgba(0, 120, 215, 1)';
const HERO_SEARCH_HEADER = 'Hero Search';

describe('Dashboard page:', () => {
  beforeEach(() => {
    if (!isPageOpened) {
      dashboard.openPage();
      dashboard.expectThatPageIsLoaded();
      isPageOpened = true;
    }
  });

  it('should have visible nav bar header', () => {
    dashboard.navBar.header.expectIsVisible();
  });

  it('should have correct nav bar header', () => {
    dashboard.navBar.header.expectIsCorrect(NAV_BAR_HEADER);
  });

  it('should have visible nav bar header bar', () => {
    dashboard.navBar.headerBar.expectIsVisible();
  });

  it('should have visible nav bar dashboard button', () => {
    dashboard.navBar.dashboardButton.expectIsVisible();
  });

  it('should have correct nav bar dashboard button', () => {
    dashboard.navBar.dashboardButton.expectIsCorrect(NAV_BAR_DASHBOARD_BUTTON);
  });

  it('should have visible nav bar heroes button', () => {
    dashboard.navBar.heroesButton.expectIsVisible();
  });

  it('should have correct nav bar heroes button', () => {
    dashboard.navBar.heroesButton.expectIsCorrect(NAV_BAR_HEROES_BUTTON);
  });

  it('should have visible grid pad header', () => {
    dashboard.topHeroesGridPad.header.expectIsVisible();
  });

  it('should have correct grid pad header', () => {
    dashboard.topHeroesGridPad.header.expectIsCorrect(TOP_HEROES_GRID_PAD_HEADER);
  });

  it('should have correct colors of all the results in grid pad', () => {
    dashboard.topHeroesGridPad.gridPadResults.expectCorrectColor(TOP_HEROES_GRID_PAD_RESULTS_COLOR);
  });

  it('should have visible hero search header', () => {
    dashboard.heroSearch.header.expectIsVisible();
  });

  it('should have correct hero search header', () => {
    dashboard.heroSearch.header.expectIsCorrect(HERO_SEARCH_HEADER);
  });

  it('should have visible hero search input', () => {
    dashboard.heroSearch.searchInput.expectIsVisible();
  });
});
