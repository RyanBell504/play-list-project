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
        font-size: var(--ddd-font-size-4xs);
        letter-spacing: var(--ddd-ls-72-lg);
        text-transform: uppercase;
        color: var(--ddd-theme-default-link);
        margin: 0 0 12px 0;
        font-weight: var(--play-list-slide-top-heading-font-weight, var(--ddd-font-weight-bold));
        }
       h3 {
        font-size: var(--play-list-slide-second-heading-font-size, var(--ddd-font-size-l));
        margin: var(--ddd-spacing-2) 0 var(--ddd-spacing-2);
        color: var(--ddd-theme-default-beaverBlue);
        font-weight: var(--play-list-slide-second-heading-font-weight, var(--ddd-font-weight-bold));
        }
      .slide {
        max-height: 100px;
        line-height: 1.2;
        overflow-y: auto;
        overflow-anchor: none;
        padding-top: var(--ddd-spacing-1);
      }
      .line {
        width: 50px;
        height: 2px;
        background-color: var(--ddd-theme-default-skyBlue);
        margin: 16px 0 24px 0;  
      }
    `];
  }

  render() {
    return html`
      <h2>${this.topHeading}</h2>
      <h3>${this.secondHeading}</h3>
      <div class=line></div>
      <div class="slide">
        <slot></slot>
      </div>`;
  }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);