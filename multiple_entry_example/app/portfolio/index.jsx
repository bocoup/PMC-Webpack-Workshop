import '../../static/fonts.css';
import '../../static/default.css';

// Render the top-level React component
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/index.jsx';
import PageHeader from '../page-header/index.jsx';
import PortfolioList from '../portfolio-list/index.jsx';
import Contact from '../contact/index.jsx';
import Footer from '../footer/index.jsx';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageHeader title="Portfolio"/>
        <PortfolioList />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById('react-root'));
