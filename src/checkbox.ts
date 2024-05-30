import { css } from "lit";
import { LionCheckbox, LionCheckboxGroup } from "@lion/ui/checkbox-group.js";

class FoobarCheckboxGroup extends LionCheckboxGroup {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* your styles here */
      `,
    ];
  }
}

class FoobarCheckbox extends LionCheckbox {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          vertical-align: middle;
          display: inline-flex;
          align-items: center;
          flex-wrap: nowrap;
        }
        :host([focused-visible]) {
          outline: 1px solid #334bff;
          outline-offset: 2px;
        }
        :host([focused-visible]) ::slotted([slot="input"]) {
          outline: none;
        }
        :host ::slotted([slot="label"]) {
          margin: 0px 7px;
        }
        :host ::slotted([slot="input"]) {
          box-sizing: border-box;
          margin: 0;
          appearance: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 0px;
          background-color: rgb(255, 255, 255);
          transition: box-shadow 150ms ease 0s, border-color 150ms ease 0s;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px inset;
          user-select: none;
          position: relative;
          border: 1px solid rgb(89, 89, 89);
          width: 14px;
          height: 14px;
          position: relative;
        }
        :host ::slotted([slot="input"]:checked) {
          border: 1px solid rgb(51, 75, 255);
        }
        :host ::slotted([slot="input"]:checked)::before {
          content: "";
          width: 85%;
          height: 85%;
          background-color: #334bff;
          transform-origin: bottom left;
          clip-path: polygon(
            10% 40%,
            0 60%,
            50% 100%,
            100% 16%,
            80% 0%,
            45% 62%
          );
        }
      `,
    ];
  }
}

customElements.define("foobar-checkbox-group", FoobarCheckboxGroup);
customElements.define("foobar-checkbox", FoobarCheckbox);
