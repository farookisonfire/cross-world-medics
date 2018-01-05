import { Component } from 'react';
import PageHeader from '../common/PageHeader';
import LearnPageContent from './LearnPageContent';
import LearnIcons from './LearnIcons';
import FAQ from './FAQ';

class LearnPage extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };

    this.faqHandleClick = this.faqHandleClick.bind(this);
  }

  faqHandleClick(e, titleProps) {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }
  render() {
    const {
      pageHeader,
      pageSubheader,
      pageDescription,
      faqs
    } = this.props.pageData;

    const { activeIndex } = this.state;
    
    return (
      <div>
        <div className="about-top">
          <PageHeader
            pageHeader={pageHeader}
            pageSubheader={pageSubheader}
            pageDescription={pageDescription} />
        </div>
        <div className="about-mid">
          <LearnPageContent />
        </div>
        <div>
          <LearnIcons />
        </div>
        <div className="faq-container">
          <FAQ
            activeIndex={activeIndex}
            faqHandleClick={this.faqHandleClick}
            faqs={faqs} />
        </div>
        <style jsx>{`
          .about-top {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
          }

          .about-mid {
            width: 100%;
            background-color: rgb(247,247,247);
          }

          .faq-container {
            margin: 48px auto;
            width: 85%;
          }

          .about-bottom {
            background-color: rgb(238, 238, 238);
          }
        `}</style>
      </div>
    );
  }
}

export default LearnPage;
