import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-slide";
  }

  constructor() {
    super();
    this.topHeading = "";
    this.secondHeading = "";
  }

  static get properties() {
    return {
      topHeading : { type: String, attribute: "top-heading" },
      secondHeading : { type: String, attribute: "second-heading" },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      h2 {
        font-size: var(--play-list-slide-top-heading-font-size, var(--ddd-font-size-m));
        margin: var(--ddd-spacing-2) 0 var(--ddd-spacing-1);
        }
       h3 {
        font-size: var(--play-list-slide-second-heading-font-size, var(--ddd-font-size-s));
        margin: var(--ddd-spacing-1) 0 var(--ddd-spacing-2);
        } 
    `];
  }

  render() {
    return html`
         <h2>${this.topHeading}</h2>
        <h3>${this.secondHeading}</h3>
      <div class="slide">
        <slot></slot>
      </div>`;
  }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);