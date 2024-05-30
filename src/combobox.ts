import { css } from "lit";
import { LionCombobox } from "@lion/ui/combobox.js";

class FoobarCombobox extends LionCombobox {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host([focused-visible]) ::slotted([slot="input"]) {
          border: 1px solid rgb(51, 75, 255);
        }
        :host ::slotted([slot="listbox"]) {
          max-height: var(--list-max-height, 600px);
          border: 1px solid #334bff;
          margin: 2px 0;
          background-color: #f2f2f2;
        }
        :host ::slotted([slot="input"]) {
          appearance: none;
          text-align: left;
          font-family: inherit;
          font-size: 12px;
          font-weight: 400;
          height: 24px;
          width: 152px;
          max-width: 100%;
          margin: 1px 0;
          outline: 0;
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
          position: relative;
          vertical-align: middle;
          border-radius: 0;
          background-color: #fff;
          text-overflow: ellipsis;
          border: 1px solid #595959;
          color: #404040;
          padding-inline-end: 8px;
          padding-inline-start: 8px;
        }
        .input-group__container {
          border-bottom: none;
        }
      `,
    ];
  }
}

customElements.define("foobar-combobox", FoobarCombobox);
