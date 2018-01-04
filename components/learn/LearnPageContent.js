const LearnPageContent = (props) => {
  return (
    <div>
      <div className="content-container">
        <h1>Gain the Competitive Edge</h1>
        <p>Medical school acceptance rates continue to drop with most schools accepting less than 4 percent of applicants. Here is how our internships make you more competitive:</p>
        <ul>
          <li>Shadowing experience ( a basic requirement of most medical schools)</li>
          <li>Global Internship in a high need community</li>
          <li>Upto 160 community volunteer hours with health focus</li>
          <li>Letter of Recommendation from Doctor/Executive</li>
          <li>Foreign language development</li>
        </ul>
        <h2>A Cross World Medic Internship will be one of the best if not the most impactful investment you have made on your path to becoming a medical professional.</h2>
      </div>
      <style jsx>{`
        .content-container {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
        }

        .content-container h1 {
          font-weight: 300;
          font-size: 30px;
          padding-top: 48px;
          margin-bottom: 24px;
        }

        .content-container p {
          color: rgba(34,34,34,.7);
          font-size: 16px;
          margin-bottom: 16px;
        }
        
        li {
          color: rgba(34,34,34,.7);
          font-size: 16px;
        }

        .content-container h2 {
          font-weight: 300;
          font-size: 22px;
          padding-bottom: 48px;
        }
      `}</style>
    </div>
  );
};

export default LearnPageContent;
