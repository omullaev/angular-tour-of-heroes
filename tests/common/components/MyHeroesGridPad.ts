import CommonActions from "../actions/CommonActions";
import {by, element, ElementFinder, ElementArrayFinder} from "protractor";
import Element from "../objects/Element";
import ListOfElements from "../objects/ListOfElements";
import Button from "../objects/Button";

export default class MyHeroesGridPad {

  private commonActions: CommonActions = new CommonActions();

  // <editor-fold defaultstate="collapsed" desc="constants declaration">
  private COMPONENT_NAME: string = 'My Heroes Grid Pad';

  private HEADER_LOGNAME: string = this.COMPONENT_NAME + ' Header';
  private GRID_PAD_LOGNAME: string = this.COMPONENT_NAME + ' Grid Pad';
  private RESULTS_LOGNAME: string = 'All The Results In Grid Pad';
  private DELETE_BUTTONS_LOGNAME: string = 'All The Delete Buttons Of Results In Grid Pad Background';
  private IDS_LOGNAME: string = 'Id Of Result In Grid Pad';
  private ADD_NEW_HERO_BUTTON_LOGNAME: string = 'Add New Hero Button';
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="elements declaration">
  private gridPadLoc: string = '//*[@class=\'heroes\']';
  private allTheResultsInGridPadLoc: string = this.gridPadLoc + '/li';
  private allTheIdsOfResultsInGridPadLoc: string = this.allTheResultsInGridPadLoc + '//*[@class=\'badge\']';
  private allTheDeleteButtonsOfResultsInGridPadLoc: string = this.allTheResultsInGridPadLoc + '/button[@class=\'delete-button\']';
  private headerLoc: string = this.gridPadLoc + '/ancestor::my-heroes/h2';
  private addNewHeroButtonLoc: string = this.gridPadLoc + '/following-sibling::button';

  private headerElement: ElementFinder = element(by.xpath(this.headerLoc));
  private gridPadElement: ElementFinder = element(by.xpath(this.gridPadLoc));
  private gridPadResultsList: ElementArrayFinder = element.all(by.xpath(this.allTheResultsInGridPadLoc));
  private gridPadIdsList: ElementArrayFinder = element.all(by.xpath(this.allTheIdsOfResultsInGridPadLoc));
  private gridPadDeleteButtonsList: ElementArrayFinder =
    element.all(by.xpath(this.allTheDeleteButtonsOfResultsInGridPadLoc));
  private addNewHeroButtonElement = element(by.xpath(this.addNewHeroButtonLoc));
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="objects">
  public header: Element = new Element(this.headerElement, this.HEADER_LOGNAME);
  public gridPad: Element = new Element(this.gridPadElement, this.GRID_PAD_LOGNAME);
  public results: ListOfElements = new ListOfElements(this.gridPadResultsList, this.RESULTS_LOGNAME);
  public ids: ListOfElements = new ListOfElements(this.gridPadIdsList, this.IDS_LOGNAME);
  public deleteButtons: ListOfElements = new ListOfElements(this.gridPadDeleteButtonsList,
    this.DELETE_BUTTONS_LOGNAME);
  public addNewHeroButton: Button = new Button(this.addNewHeroButtonElement, this.ADD_NEW_HERO_BUTTON_LOGNAME);
  // </editor-fold>
}
