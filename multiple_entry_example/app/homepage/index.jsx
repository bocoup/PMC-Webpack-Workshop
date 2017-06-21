import '../../static/fonts.css';
import '../../static/default.css';

// Render the top-level React component
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/index.jsx';
import PageHeader from '../page-header/index.jsx';
import Banner from '../banner/index.jsx';
import Featured from '../featured/index.jsx';
import PortfolioList from '../portfolio-list/index.jsx';
import Contact from '../contact/index.jsx';
import Footer from '../footer/index.jsx';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageHeader title="Webpack Analysis Example Site"/>
        <Banner />
        <Featured />
        <PortfolioList />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.getElementById('react-root'));
