import '../../static/fonts.css';
import '../../static/default.css';

// Render the top-level React component
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/index.jsx';
import PageHeader from '../page-header/index.jsx';
import Banner from '../banner/index.jsx';
import Contact from '../contact/index.jsx';
import Footer from '../footer/index.jsx';

class Post extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageHeader title="Kafka"/>
        <section id="post" className="container">
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>

          <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>

          <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me? " he thought. It wasn't a dream.</p>

          <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>

          <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</p>
        </section>
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Post />, document.getElementById('react-root'));
