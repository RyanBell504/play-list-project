    import { LitElement, html, css } from "lit";
    import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
    import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

    export class ArrowButton extends DDDSuper(I18NMixin(LitElement)) {
        
    static get tag() {
        return "arrow-button";
        }
        constructor() {
        super();
        }

        static get properties() {
            return {
                ...super.properties,
            };
            }

            static get styles() {
                return [super.styles,
                css`
                :host {
                    display: inline-block;
                    cursor: pointer;
                    padding: var(--ddd-spacing-2);
                    color: var(--ddd-theme-primary);
                }
                button {
                    background: none;
                    border: none;
                    font-size: var(--ddd-font-size-l);
                    color: inherit;
                    cursor: pointer;
                }
                `];
            }
            
    render() {
        return html`
        <button left @click="${this._onClick}"><</button>
        <button right @click="${this._onClick}">></button>`;
        }

        _onClick(e) {
            const direction = e.target.hasAttribute("left") ? "left" : "right";
            this.dispatchEvent(new CustomEvent("arrow-click", {
                detail: { direction },
                bubbles: true,
                composed: true
            }));
    }

    }

    globalThis.customElements.define(ArrowButton.tag, ArrowButton);