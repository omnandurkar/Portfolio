import React from 'react';

class DeviceDetector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        };
    }

    componentDidMount() {
        this.checkIfMobile();
        window.addEventListener('resize', this.checkIfMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkIfMobile);
    }

    checkIfMobile = () => {
        const isMobile = window.innerWidth < 768; // You can adjust this threshold as needed
        this.setState({ isMobile });
    };

    render() {
        const { isMobile } = this.state;
        return (
            <div>
                {/* {isMobile ? (
                    <p>This site is only available for laptop devices. Please visit the mobile version <a href="your-mobile-site-url">here</a>.</p>
                ) : (
                    <p>This site is available for laptop devices.</p>
                )} */}
            </div>
        );
    }
}

export default DeviceDetector;
