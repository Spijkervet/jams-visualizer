import React from 'react';
import PropTypes from "prop-types";

// Audiolist

class AudioList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hover: false,
        audioList: null
      };

    //   this.defaultStyle = {
    //     width: `${width}px`,
    //     height: `${height}px`,
    //     backgroundColor: "#717273",
    //     borderRadius: "2px",
    //     boxShadow: "0px 0px 16px 1px rgba(0,0,0,0.75)"
    //   };

    //   this.hoverStyle = {
    //     width: `${width}px`,
    //     height: `${height}px`,
    //     borderRadius: "2px",
    //     boxShadow: `0px 0px 16px 1px ${color}`,
    //     backgroundColor: "#9499A2",
    //     transition: "0.05s"
    //   };
  
      this.handleEvent = this.handleEvent.bind(this)
    //   this.start = this.start.bind(this)
    }
  
    componentDidMount() {
    }

    handleEvent = (event) => {
      console.log(event)
      if (event.type === "touchstart") {// || event.type === "mousedown") {
        this.setState({ hover: true });
      } else {
        this.setState({ hover: false });
      }
    }

    start = (event) => {
        // console.log(event)
        console.log(this.props.details.audio_path)
    }
  
    render() {
    //   const { details } = this.props
      return (
        <div onClick={this.start}>
            <div>
                {this.props.details.track_id} - {this.props.details.title}
            </div>
            <div>
            {/* <audio controls>
                <source src={'http://localhost:6008/cdn/' + this.props.details._track_paths.audio[0]} type="audio/wav"></source>
            </audio> */}
            </div>
        </div>
        // <div style={this.audioBlock} onTouchStart={ this.handleEvent } onTouchEnd={ this.handleEvent } onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent }>
        //   <div
        //     style={
        //       this.state.hover === true ? this.hoverStyle : this.defaultStyle
        //     }
        //   />
        //   <p>{this.props.children}</p>
        // </div>
      );
    }
  }
  
  AudioList.propTypes = {
      volume: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      margin: PropTypes.number,
      color: PropTypes.string,
      keyCode: PropTypes.number,
      keyUp: PropTypes.bool
  };

  AudioList.defaultProps = {
      width: 200,
      height: 200,
      margin: 50,
      color: "#5f5f5f",
      keyUp: false
  };

  export default AudioList;