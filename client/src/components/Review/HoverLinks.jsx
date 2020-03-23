import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import '../../styles/HoverLinks.styles.scss';

class HoverLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showShare: false,
      showEmbed: false,
    };
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
    this.showEmbedModal = this.showEmbedModal.bind(this);
    this.hideEmbedModal = this.hideEmbedModal.bind(this);
  }

  showShareModal() {
    this.setState({
      showShare: true,
    });
  }

  hideShareModal() {
    this.setState({
      showShare: false,
    });
  }

  showEmbedModal() {
    this.setState({
      showEmbed: true,
    });
  }

  hideEmbedModal() {
    this.setState({
      showEmbed: false,
    });
  }

  render() {
    if (this.props.isHovered) {
      return (
        <div>
          <a className="shareLink" onClick={this.showShareModal}>
            <FontAwesomeIcon icon={faShareSquare} className="hoverIcon" />
            Share review
          </a>
          <a className="embedLink">
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} className="hoverIcon" />
            Embed review
          </a>
        </div>
      );
    }
    return null;
  }
}
export default HoverLinks;
