import CommonActions from "../actions/CommonActions";
import {by, element, ElementFinder} from "protractor";
import Button from "../objects/Button";
import Container from "../objects/Element";

export default class NavBar {

  private commonActions: CommonActions = new CommonActions();

  // <editor-fold defaultstate="collapsed" desc="constants declaration">
  private COMPONENT_NAME: string = 'Tour of Heroes';

  private HEADER_LOGNAME: string = this.COMPONENT_NAME + ' Header';
  private HEADER_BAR_LOGNAME: string = this.COMPONENT_NAME + ' Header Bar';
  private DASHBOARD_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' Dashboard Button';
  private HEROES_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' Heroes Button';
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="elements declaration">
  private buttonsContainerLoc = '//nav';
  private dashboardButtonLoc = this.buttonsContainerLoc + '/a[@href=\'/dashboard\']';
  private heroesButtonLoc = this.buttonsContainerLoc + '/a[@href=\'/heroes\']';

  private headerElement: ElementFinder = element(by.tagName('h1'));
  private headerBarElement: ElementFinder = element(by.className('header-bar'));
  private dashboardButtonElement: ElementFinder = element(by.xpath(this.dashboardButtonLoc));
  private heroesButtonElement: ElementFinder = element(by.xpath(this.heroesButtonLoc));
  // </editor-fold>

  // <editor-fold defaultstate="collapsed" desc="objects">
  public header: Container = new Container(this.headerElement, this.HEADER_LOGNAME);
  public headerBar: Container = new Container(this.headerBarElement, this.HEADER_BAR_LOGNAME);
  public dashboardButton: Button = new Button(this.dashboardButtonElement, this.DASHBOARD_BUTTON_LOGNAME);
  public heroesButton: Button = new Button(this.heroesButtonElement, this.HEROES_BUTTON_LOGNAME);
  // </editor-fold>
}
