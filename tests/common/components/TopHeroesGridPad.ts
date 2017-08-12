import CommonActions from "../actions/CommonActions";
import {by, element, ElementFinder, ElementArrayFinder} from "protractor";
import Element from "../objects/Element";
import ListOfElements from "../objects/ListOfElements";

export default class TopHeroesGridPad {

  private commonActions: CommonActions = new CommonActions();

  // <editor-fold defaultstate="collapsed" desc="constants declaration">
  private COMPONENT_NAME: string = 'Top Heroes';

  private HEADER_LOGNAME: string = this.COMPONENT_NAME + ' Header';
  private GRID_PAD_LOGNAME: string = this.COMPONENT_NAME + ' Grid Pad';
  private GRID_PAD_RESULTS_BACKGROUND_LOGNAME = 'All The Results In Grid Pad Background';
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="elements declaration">
  private gridPadLoc: string = '//div[@class=\'grid grid-pad\']';
  private allTheResultsInGridPadLoc: string = this.gridPadLoc + '//div[@class=\'module hero\']';
  private headerLoc: string = this.gridPadLoc + '/ancestor::my-dashboard/h3';

  private headerElement: ElementFinder = element(by.xpath(this.headerLoc));
  private gridPadElement: ElementFinder = element(by.xpath(this.gridPadLoc));
  private gridPadResultsList: ElementArrayFinder = this.gridPadElement.all(by.xpath(this.allTheResultsInGridPadLoc));
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="objects">
  public header: Element = new Element(this.headerElement, this.HEADER_LOGNAME);
  public gridPad: Element = new Element(this.gridPadElement, this.GRID_PAD_LOGNAME);
  public gridPadResults: ListOfElements = new ListOfElements(this.gridPadResultsList,
    this.GRID_PAD_RESULTS_BACKGROUND_LOGNAME);
  // </editor-fold>
}
