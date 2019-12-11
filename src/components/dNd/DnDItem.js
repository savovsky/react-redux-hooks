import React from 'react';


class DnDItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);

    // this.state = {
    //   hoveredId: null,
    //   dragId: null
    // };
  }

  handleDragStart(e) {
    const dragItemId = e.target.id;
    const sourceContainerId = e.target.parentNode.id;
    e.dataTransfer.setData('dragItem', dragItemId);
    e.dataTransfer.setData('sourceContainer', sourceContainerId);

    console.log('%c drag itemId = ', 'color: deepskyblue', dragItemId);
    console.log('%c source containerId = ', 'color: gold', sourceContainerId);
    // this.setState({ dragId: dragItemId });
  }

  handleDragOver(e) {
    e.stopPropagation();

    console.log('%c drag over itemId = ', 'color: darkcyan', e.currentTarget.id);
    // this.setState({ hoveredId: e.currentTarget.id });
  }

  // getClass() {
  //   if (!this.state.dragId && this.state.dragId !== this.state.hoveredId) {
  //     return 'm-t-130';
  //   }

  //   return 'm-0';
  // }

  render() {
    // console.log('this.props.id', this.props.id);
    // console.log('this.state.hoveredId', this.state.hoveredId);
    // console.log('this.state.dragId', this.state.dragId);
    return (
      <div
        id={this.props.id}
        onDragStart={this.handleDragStart}
        onDragOver={this.handleDragOver}
        draggable
        // className={this.getClass()}
      >
        {this.props.children}
      </div>
    );
  }
};

export default DnDItem;
