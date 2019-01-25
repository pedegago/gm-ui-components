import { Component, Prop } from "@stencil/core";

@Component({
  tag: "gm-ui-error-card",
  shadow: true,
  styleUrls: ["../../style/styleVariables.css", "./error-card.css"]
})
export class ErrorCard {
  @Prop({ mutable: true, reflectToAttr: true }) errorMsg: string = "Error";
  @Prop() icon;

  render() {
    return (
      <div id="error-box">
        <div id="error-content">
          <span>{this.icon}</span>
          <span>{this.errorMsg}</span>
        </div>
      </div>
    );
  }
}
