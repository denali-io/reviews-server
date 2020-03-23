import React from 'react';
import '../../styles/ShareModal.styles.scss';

class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
  }

  render() {
    let showHideClassName;
    let classy;
    if (this.state.showModal) {
      classy = 'modal display-block';
    } else {
      classy = 'modal display-none';
    }
    if (!showHideClassName) {
      return (
        <div className={classy}>
        {/* <div> */}
        <section className="modal-main">
          {this.props.children}
          <button onClick={this.props.handleClose}>close</button>
        </section>
      </div>
      )
    } else {
      return (
        <div className={classy}>
          {/* <div> */}
          <section className="modal-main">
            {this.props.children}
            <button onClick={this.props.handleClose}>close</button>
          </section>
        </div>
      );
    }
  }
}
export default ShareModal;
