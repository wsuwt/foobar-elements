import { css } from "lit";

import { LionInput } from "@lion/ui/input.js";
import { LionSwitch } from "@lion/ui/switch.js";
import { ChoiceInputMixin } from "@lion/ui/form-core.js";

class FoobarSwitch extends ChoiceInputMixin(LionInput) {
  static get styles() {
    return [
      ...LionSwitch.styles,
      css`
        :host {
          display: flex;
          align-items: center;
        }
        :host ::slotted([slot="input"]) {
          outline: none;
          appearance: none;
          height: 20px;
          width: 36px;
          cursor: pointer;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: inherit;
          text-overflow: inherit;
          overflow: inherit;
        }
        :host([focused-visible]) ::slotted([slot="input"]) {
          border-color: #334bff;
        }
        :host ::slotted([slot="input"])::before {
          content: "";
          position: absolute;
          box-sizing: border-box;
          border-radius: inherit;
          top: 1px;
          left: 1px;
          width: calc(50% - 1px);
          height: calc(100% - (1px * 2));
          background-color: #0d0d0d;
        }
        :host([checked]) ::slotted([slot="input"])::before {
          left: auto;
          border-color: #334bff;
          background-color: #334bff;
          right: 1px;
        }
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.type = "checkbox";
  }
}

customElements.define("foobar-switch", FoobarSwitch);
