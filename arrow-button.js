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
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }
                button {
                    position: absolute;
                    pointer-events: auto;
                    top: 50%;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background-color: white;
                    border: 2px solid #1f5f99;
                    font-size: 24px;
                    color: var(--ddd-theme-primary);
                    cursor: pointer;
                }
                button[left] {
                    left: -24px;
                }
                button[right] {
                    right: -24px;
                }
                button:hover {
                    background-color: grey;
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