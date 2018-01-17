const ExperienceSectionContent = (props) => {
  const { sectionContent } = props;
  const { text } = sectionContent;

  return (
    <p className="content-text">
      {text}
      <style jsx>{`
        .content-text {
          color: rgba(34,34,34,.7);
          font-size: 16px;
          margin-bottom: 16px;
        }
      `}</style>
    </p>
  );
}

const ExperienceSection = (props) => {
  const { section } = props;
  const { 
    sectionId,
    sectionTitle,
    imageUrl = '',
    imagePosition = '',
    content
  } = section;

  const sectionContent = content.map((contentItem) => (
    <ExperienceSectionContent
      key={`content-id-${contentItem.contentId}`}
      sectionContent={contentItem}
    />
  ))

  const contentContainer = imageUrl ? (
    <div className={imagePosition === 'right' ? 'content-container' : 'content-container-reverse'}>
      <div className={imagePosition === 'right' ? 'content-text' : 'content-text-reverse'}>
        { sectionContent }
      </div>
      <div>
        <img 
          src={imageUrl}
          style={{ maxHeight: 300 }}
        />
      </div>
      <style jsx>{`
        .content-container {
          display: flex;
          align-items: center;
        }
        
        .content-container-reverse {
          display: flex;
          align-items: center;
          flex-direction: row-reverse
        }

        .content-text {
          padding-right: 16px;
        }

        .content-text-reverse {
          padding-left: 16px;
        }

        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
          }
          .content-container-reverse {
            flex-direction: column;
          }

          .content-text {
            padding-right: 0px;
          }

          .content-text-reverse {
            padding-left: 0px;
          }
        }
      `}</style>
    </div>) : (
    <div> { sectionContent } </div> );


  return (
    <div className="content-section">
      <h2>{sectionTitle}</h2>
      <div>
        { contentContainer }
      </div>
      <style jsx>{`
        .content-section h2 {
          font-weight: 300;
          font-size: 30px;
          padding-top: 48px;
          margin-bottom: 24px;
        }

        .content-container {
          width: 50%;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}



export default ExperienceSection;
