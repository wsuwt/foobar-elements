import { css } from "lit";
import { LionOption, LionOptions } from "@lion/ui/listbox.js";

class FoobarOptions extends LionOptions {}

class FoobarOption extends LionOption {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          align-items: center;
          color: #262626;
          background-color: #f2f2f2;
          padding: 0px 8px;
          cursor: pointer;
          min-height: 24px;
        }
        :host(:hover),
        :host([active]) {
          color: white;
          background-color: #1429bd;
        }
        :host([checked]:not([active])) {
          color: #0d0d0d;
          font-weight: 600;
          background-image: linear-gradient(#334bff, #334bff);
          background-size: 4px 100%;
          background-position: left top;
          background-repeat: no-repeat;
          background-color: #e6e6e6;
        }
      `,
    ];
  }
}

customElements.define("foobar-options", FoobarOptions);
customElements.define("foobar-option", FoobarOption);
