import { Component, Prop } from "@stencil/core";

@Component({
  tag: "gm-ui-layout-section",
  styleUrls: ["../../style/styleVariables.css", "./layout-section.css"],
  shadow: true
})
export class LayoutSection {
  @Prop() childEls: HTMLElement = <div>Layout section content goes here</div>;
  @Prop() sectionTitle: string = "Test Title";
  @Prop() icon: Function;
  render() {
    return (
      <div id="wrapper">
        {this.sectionTitle && (
          <header>
            {this.icon && <span id="icon">{this.icon()}</span>}
            <span>{this.sectionTitle}</span>
          </header>
        )}
        <div id="content">{this.childEls}</div>
      </div>
    );
  }
}
