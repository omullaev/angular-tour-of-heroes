import Heroes from '../common/pages/Heroes';

let heroes: Heroes = new Heroes();
let isPageOpened = false;
const NAV_BAR_HEADER = 'Tour of Heroes';
const DASHBOARD_BUTTON = 'Dashboard';
const HEROES_BUTTON = 'Heroes';
const MY_HEROES_GRID_PAD_HEADER = 'My Heroes';
const MY_HEROES_GRID_PAD_RESULTS_COLOR = 'rgba(238, 238, 238, 1)';
const MY_HEROES_GRID_PAD_IDS_COLOR = 'rgba(0, 120, 215, 1)';
const MY_HEROES_GRID_DELETE_BUTTONS = 'Delete';
const MY_HEROES_GRID_DELETE_BUTTONS_COLOR = 'rgba(216, 59, 1, 1)';
const MY_HEROES_GRID_DELETE_BUTTONS_ADD_NEW_HERO_BUTTON = 'Add New Hero';


describe('Heroes page:', () => {
  beforeEach(() => {
    if (!isPageOpened) {
      heroes.openPage();
      heroes.expectThatPageIsLoaded();
      isPageOpened = true;
    }
  });

  it('should have visible nav bar header', () => {
    heroes.navBar.header.expectIsVisible();
  });

  it('should have correct nav bar header', () => {
    heroes.navBar.header.expectIsCorrect(NAV_BAR_HEADER);
  });

  it('should have visible nav bar header bar', () => {
    heroes.navBar.headerBar.expectIsVisible();
  });

  it('should have visible nav bar dashboard button', () => {
    heroes.navBar.dashboardButton.expectIsVisible();
  });

  it('should have correct nav bar dashboard button', () => {
    heroes.navBar.dashboardButton.expectIsCorrect(DASHBOARD_BUTTON);
  });

  it('should have visible nav bar heroes button', () => {
    heroes.navBar.heroesButton.expectIsVisible();
  });

  it('should have correct nav bar heroes button', () => {
    heroes.navBar.heroesButton.expectIsCorrect(HEROES_BUTTON);
  });

  it('should have visible grid pad header', () => {
    heroes.myHeroesGridPad.header.expectIsVisible();
  });

  it('should have correct grid pad header', () => {
    heroes.myHeroesGridPad.header.expectIsCorrect(MY_HEROES_GRID_PAD_HEADER);
  });

  it('should have correct colors of all the results in grid pad', () => {
    heroes.myHeroesGridPad.results.expectCorrectColor(MY_HEROES_GRID_PAD_RESULTS_COLOR);
  });

  it('should have correct colors of all the ids of results in grid pad', () => {
    heroes.myHeroesGridPad.ids.expectCorrectColor(MY_HEROES_GRID_PAD_IDS_COLOR);
  });

  it('should have correct text of all the delete buttons of results in grid pad', () => {
    heroes.myHeroesGridPad.deleteButtons.expectEqualText(MY_HEROES_GRID_DELETE_BUTTONS);
  });

  it('should have correct colors of all the delete buttons of results in grid pad', () => {
    heroes.myHeroesGridPad.deleteButtons.expectCorrectColor(MY_HEROES_GRID_DELETE_BUTTONS_COLOR);
  });

  it('should have visible grid pad add new hero button', () => {
    heroes.myHeroesGridPad.addNewHeroButton.expectIsVisible();
  });

  it('should have correct grid pad add new hero button', () => {
    heroes.myHeroesGridPad.addNewHeroButton.expectIsCorrect(MY_HEROES_GRID_DELETE_BUTTONS_ADD_NEW_HERO_BUTTON);
  });
});
