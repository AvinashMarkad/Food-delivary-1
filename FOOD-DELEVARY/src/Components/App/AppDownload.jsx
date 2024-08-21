import React from 'react';
import './AppDownload.css';
import { assets } from '../Assets/assets';

class AppDownload extends React.Component {
  // Error boundary implementation
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught in AppDownload:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when there is an error
      return <div>Something went wrong. Please try again later.</div>;
    }

    // Render the original component if no error
    return (
      <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="app-download-platform">
          {assets?.play_store ? (
            <img src={assets.play_store} alt="Google Play Store" />
          ) : (
            <p>Google Play Store icon not available</p>
          )}
          {assets?.app_store ? (
            <img src={assets.app_store} alt="Apple App Store" />
          ) : (
            <p>Apple App Store icon not available</p>
          )}
        </div>
      </div>
    );
  }
}

export default AppDownload;
