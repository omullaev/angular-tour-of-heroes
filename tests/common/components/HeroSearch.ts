import {by, element, ElementFinder, ElementArrayFinder} from "protractor";
import Element from "../objects/Element";
import Field from "../objects/Field";
import ListOfElements from "../objects/ListOfElements";

export default class HeroSearch {

  // <editor-fold defaultstate="collapsed" desc="constants declaration">
  private COMPONENT_NAME: string = 'Hero Search';

  private HEADER_LOGNAME: string = this.COMPONENT_NAME + ' Header';
  private SEARCH_INPUT_LOGNAME: string = this.COMPONENT_NAME + ' Search Input';
  private DROPDOWN_LOGNAME: string = this.COMPONENT_NAME + ' Dropdown';
  private SEARCH_RESULT_LOGNAME: string = this.COMPONENT_NAME + ' Search Result';
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="elements declaration">
  private dropdownLoc: string = '//div[*[@class=\'search-result\']]';

  private heroSearchContainer: ElementFinder = element(by.id('search-component'));
  private headerElement: ElementFinder = this.heroSearchContainer.element(by.tagName('h4'));
  private searchInputElement: ElementFinder = this.heroSearchContainer.element(by.id('search-box'));
  private dropdownElement: ElementFinder = element(by.xpath(this.dropdownLoc));
  private searchResultsList: ElementArrayFinder = this.heroSearchContainer.all(by.className('search-result'));
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="objects">
  public header: Element = new Element(this.headerElement, this.HEADER_LOGNAME);
  public searchInput: Field = new Field(this.searchInputElement, this.SEARCH_INPUT_LOGNAME);
  public dropdown: Element = new Element(this.dropdownElement, this.DROPDOWN_LOGNAME);
  public searchResults: ListOfElements = new ListOfElements(this.searchResultsList, this.SEARCH_RESULT_LOGNAME);
  // </editor-fold>
}
