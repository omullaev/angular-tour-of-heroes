import CommonActions from '../actions/CommonActions';
import {ElementFinder} from 'protractor';

let commonActions: CommonActions = new CommonActions();

export default class Element {

  protected element: ElementFinder;
  protected LOGNAME: string;

  constructor(element: ElementFinder, LOGNAME: string){
    this.element = element;
    this.LOGNAME = LOGNAME;
  }

  public expectIsVisible(): void {
    this.waitUntilIsVisible();
    this.isPresent();
    commonActions.log('Visibility of ' + this.LOGNAME + ' has been checked');
  };

  public expectIsCorrect(text: string): void {
    this.waitUntilIsVisible();
    this.isCorrect(text);
    commonActions.log('Correctness of ' + this.LOGNAME + ' has been checked');
  };

  private waitUntilIsVisible(): void {
    commonActions.waitUntilIsVisible(this.element);
  };

  private isPresent(): void {
    commonActions.isPresent(this.element, this.LOGNAME);
  };

  private isCorrect(text: string): void {
    commonActions.isTextEquals(this.element, text, this.LOGNAME);
  };
}
