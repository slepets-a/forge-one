import React from 'react'
import PropTypes from 'prop-types';

class ImageLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.loadImage(this.props.src);
    }

    componentWillReceiveProps({src}) {
        this.loadImage(src);
    }

    loadImage = src => {
        this.setState({
            isLoading: true,
        });

        let img = new Image();
        img.onload = () => {
            this.setState({
                isLoading: false,
            })
        };

        img.src = src;
    };

    render() {
        const {
            src,
        } = this.props;
        const {
            isLoading,
        } = this.state;

        return (
            isLoading ?
                <p>Loading...</p>
                : <img src={src} alt="Season"/>
        )
    }
}

ImageLoader.propTypes = {
    src: PropTypes.string.isRequired,
};

export default ImageLoader;