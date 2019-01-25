import { Component, Prop } from "@stencil/core";

@Component({
  tag: "gm-ui-layout-section",
  styleUrls: ["../../style/styleVariables.css", "./layout-section.css"],
  shadow: true
})
export class LayoutSection {
  @Prop() sectionTitle: string = "Test Title";

  render() {
    return (
      <div id="wrapper">
        {this.sectionTitle && (
          <header>
            <slot name="icon" />
            <h3>{this.sectionTitle}</h3>
          </header>
        )}
        <div id="content">
          <slot />
        </div>
      </div>
    );
  }
}
