import PageHeader from '../common/PageHeader';
import ExperienceSection from './ExperienceSection';
import ExperiencePageContent from './ExperiencePageContent';

const ExperiencePage = (props) => {
  const { pageData } = props;
  const {
    pageHeader,
    sections
  } = pageData;

  const experienceSections = sections.map((section) => (
    <ExperienceSection
      key={`section-id-${section.sectionId}`}
      section={section}
    />
  ))
  
  return (
    <div>
      <div className="top-section">
        <PageHeader
          pageHeader={pageHeader}
        />
      </div>
      <div className="mid-section">
        <ExperiencePageContent />
      </div>
      <style jsx>{`
        .top-section {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 100px;
        }

        .mid-section {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-top: -80px;
          margin-bottom: 48px;
        }
      `}</style>
    </div>
  );
}

export default ExperiencePage;