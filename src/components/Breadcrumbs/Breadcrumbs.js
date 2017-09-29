import React from "react";
import styled from "styled-components";
import { FONT_GROUP_MAIN_TEXT } from "../../style/fonts/fontVariables";
import BreadcrumbItem from "./BreadcrumbItem";

export const BreadcrumbsContainer = styled.ol`
  flex: 1 1 auto;
  display: flex;
  margin: 0;
  font-family: ${FONT_GROUP_MAIN_TEXT};
  padding: 0;
  flex-direction: row;
  height: inherit;
  align-items: stretch;
`;

export const Elipsis = styled.span`
  cursor: pointer;
  padding: 0 8px;
  &:before {
    content: "...";
  }
`;

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: false };
  }
  componentDidMount() {
    this.updateView(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateView(nextProps);
  }
  updateView = props => {
    const { children, maxItems } = props;
    const childrenLen = React.Children.count(children);
    maxItems < childrenLen ? this.collapse() : this.expand();
  };
  collapse = () => this.setState({ isCollapsed: true });

  expand = () => this.setState({ isCollapsed: false });

  renderCollapsed = children => {
    const elipsisItem = (
      <BreadcrumbItem key={1}>
        <Elipsis onClick={this.expand} />
      </BreadcrumbItem>
    );
    const collapsedArr = [
      children[0],
      elipsisItem,
      children[children.length - 1]
    ];
    return collapsedArr;
  };

  render() {
    const { children, maxItems } = this.props;
    const { isCollapsed } = this.state;
    return (
      <BreadcrumbsContainer>
        {isCollapsed && children.length > 2 ? (
          this.renderCollapsed(children)
        ) : (
          children
        )}
      </BreadcrumbsContainer>
    );
  }
}

export default Breadcrumbs;
