const ExperiencePageContent = () => {
  return (
    <div>
      <div className="btn-container">
        <p className="experience-btn">
          Before You Go
        </p>
        <p className="experience-btn">
          In Country
        </p>
        <p className="experience-btn">
          Post Program
        </p>
      </div>
      <style jsx>{`
        .btn-container {
          margin-top: 80px;
          display: flex;
        }

        .experience-btn {
          padding: 20px;
          height: 96px;
          text-align: center;
          background-color: rgb(255,255,255);
          border: 1px solid black;
          color: rgba(37,37,37,.7);
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

export default ExperiencePageContent;
