import { typeformURL } from '../../lib/constants';

const ExperiencePageContent = () => {
  return (
    <div>
      <div className="btn-container">
        <div className="experience-btn">
          <img src="https://s3.amazonaws.com/health-corps-international/CWM-logo-no-text-transparent.png"/>
          <a href="#before-you-go">Before You Go</a>
        </div>
        <div className="experience-btn">
          <img src="https://s3.amazonaws.com/health-corps-international/CWM-logo-no-text-transparent.png"/>
          <a href="#in-country">In Country</a>
        </div>
        <div className="experience-btn">
          <img src="https://s3.amazonaws.com/health-corps-international/CWM-logo-no-text-transparent.png"/>
          <a href="#post-program">Post Program</a>
        </div>
      </div>
      <div className="experience-image img-1" />
      <div className="text-container">
        <div className="section-header" id="before-you-go">
          <img src="https://s3.amazonaws.com/health-corps-international/CWM-logo-no-text-transparent.png"/>
          <h2>Before You Go</h2>
        </div>
        <p>Registration is easy, simply apply and reserve your space by paying the $300 registration fee.</p>
        <p>Our programs take place during major breaks (Spring, Summer, and Winter) in the academic school year. Please keep in mind that programs running from May to August fill up in advance so we recommend registering early to ensure the date you want.</p>
        <p>Our continuum team will then contact you to welcome you to the program and provide you access to your account and team channel where you can interact with other medical interns on your program.</p>
        <p>Registration covers pre-departure support from our team, the processing of your application, the creation of your team channel, intern handbook, and housing deposit. The remainder of your program fee is required within 90 days before your program start date.</p>
        <h3>Support Continuum</h3>
        <p>Our team is located in the United States and South Africa. This creates a seamless transition for our medical interns since there is no placement or hand off process. Our personal and professional staff are with you from the minute you apply to the moment you land in Cape Town. Friendly and accessible, they have detailed knowledge of every step of your program.</p>
        <p>After you register, you receive access to your Slack channel. In your team channel you will get to meet the other interns and staff on your program and also receive all of the information required to stay on track and successfully prepare for your trip.</p>
        <h3>Flights and Insurance</h3>
        <p>We don’t include flights in our programs because our interns join us from all over the world. However, our interns have special access to our partnership with STA (Student Travel Agency) who will help you find great deals and assist in pairing you to travel with a fellow intern if you wish.</p>
        <p>Just as when you travel on holiday, you’ll have to take out a good personal travel insurance, which needs to cover you while working in a hospital (not all policies do). STA can help you find the right insurance policy for you.</p>
        <h3>Health Preparations</h3>
        <p>An amazing experience abroad requires you to be properly prepared and this includes having the right vaccines and vaccination. We strongly recommend that you arrange a visit with your doctor or a travel clinic before your trip.</p>
        <h3>Pre-Clinical</h3>
        <p>Before your travel, we’ll provide you with the details of the hospital/clinic and departments you’ll be interning in, your placement mentors and other students who will be there via personal Cross World Medics channel.</p>
        <p>Please keep in mind that health professionals can change department</p>
      </div>
      <div className="text-container" id="in-country">
        <div className="section-header">
          <img src="https://s3.amazonaws.com/health-corps-international/CWM-logo-no-text-transparent.png"/>
          <h2>In Country</h2>
        </div>
        <p>Upon arrival, a staff member will meet you at the airport and take you to the Cross World Medics Residence. You’ll then receive your welcome package and tour of the property. We know you’ve been on a long journey and have scheduled time for you to freshen up and relax on your first day before your welcome briefing.</p>
        <p>After a good night’s sleep you will attend the formal orientation. During this time you will go over all elements of your program including but not limited to clinical placement, introduction to the community, basic Xhosa lesson, and safety. During orientation you will be receiving your official Cross World Medics white coat and then you will head to visit your medical site.</p>
      </div>
      <div className="experience-image-row">
        <div className="experience-image-single img-2" />
        <div className="experience-image-single img-3" />
        <div className="experience-image-single img-4" />
      </div>
      <div className="text-container">
        <h3>Medical Shadowing</h3>
        <p>You will be shadowing a healthcare professional suited to your chosen discipline (e.g. doctor, nurse, midwife). Generally you will spend 5-8 hours a day in the clinical setting from Monday - Thursday, with a half day on Friday to allow you to optimize your weekend excursions. Hospital and Clinical schedules do change depending on physician availability and demand, so it is possible that your schedule may change slightly or that you may shadow more than one physician. Cross World Medics puts in the added effort to try and match you to the rotation of your choice; however, we do not guarantee specific specialty placements.</p>
        <h3>Beyond Shadowing</h3>
        <p>This is where Cross World Medics truly distinguishes itself. Beyond offering a world class medical shadowing program we have designed a series of experiences to contextualize the state of health, culture, and innovation in South Africa. In the past this has included on site work with a Forbes Top 30 Under 30 Health Entrepreneur, exploring the history of Cape Town with a PBS documentarian and historian, or analyzing the past, present, and future of medicine with a world renowned traditional healer. Our staff strives to create life changing and life empowering programs on a daily basis.</p>
        <h3>Tracking Progress</h3>
        <p>We want to offer the best medical programs in the world. Throughout your experience you will receive survey ‘s that will allow you to track your shadowing hours while providing important feedback. Each week Cross World Medics will provide you with a report card that tracks your progress. This report card will be referenced when it comes time to receive a letter of recommendation or proof of organizational involvement.</p>
        <h3>Your Spare Time</h3>
        <p>The weekends and evening are your free time. You may wish to stay at the Cross World Medics Residence or explore your new surroundings. Our staff is available to show you around and organize excursions for you. Cape Town, South Africa is one of the most unique places in the world with its own biome nestled between Table Mountain and beautiful beaches. Most of our interns book weekend group excursions to hang out with penguins at Boulder Beach and view lions and elephants on some of the best safaris in the world.</p>
      </div>
      <div className="text-container" id="post-program">
        <div className="section-header">
          <img src="https://s3.amazonaws.com/health-corps-international/CWM-logo-no-text-transparent.png"/>
          <h2>Post Program: The Journey Continues</h2>
        </div>
        <p>As an alumni of Cross World Medics you will have exclusive access to events, programs, and special offers. Once you become a registered physician you can then join our Tribe of Doctors who are determined to revolutionize modern medicine in the developing world. Alumni are also eligible to apply for fellowship positions upon the completion of their program.</p>
      </div>
      <div className="experience-image img-5" />
      <div className="experience-cta-container">
          <p
            onClick={() => window.open(`${typeformURL}webExperience`, '_blank')}
            className="experience-cta-button">Apply Now
          </p>
        </div>
      <style jsx>{`
        .btn-container {
          display: flex;
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 32px;
          margin-top: -48px;
        }

        .experience-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          text-align: center;
          background-color: rgb(255,255,255);
          flex-grow: 1;
          font-size: 28px;
          font-weight: 300;
          cursor: pointer;
        }

        .experience-btn a {
          color: black;
        }

        .experience-btn a:hover {
          color: rgba(0,196,204,1);
        }

        .experience-btn img {
          width: 30px;
          margin-right: 8px;
        }

        .experience-image {
          height: 500px;
          background-size: cover;
        }

        .img-1 {
          background-image: url('https://s3.amazonaws.com/health-corps-international/experience-image-1-crop.jpg');
        }

        .img-2 {
          background-image: url('https://s3.amazonaws.com/health-corps-international/experience-image-2.jpg');
        }
        .img-3 {
          background-image: url('https://s3.amazonaws.com/health-corps-international/experience-image-3-sample.jpg');
        }
        .img-4 {
          background-image: url('https://s3.amazonaws.com/health-corps-international/experience-image-4.jpg');
        }

        .img-5 {
          background-position: center;
          background-image: url('https://s3.amazonaws.com/health-corps-international/experience-image-5-sample.jpg');
        }

        .experience-image-row {
          display: flex;
        }

        .experience-image-single {
          flex-grow: 1;
          background-size: cover;
          height: 300px;
          background-position: center;
        }

        .experience-cta-container {
            text-align: center;
            margin-top: 70px;
            margin-bottom: 70px;
          }

        .experience-cta-button {
          cursor: pointer;
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-top: 16px;
          padding-bottom: 16px;
          transition-duration: .5s;
          border: 1px solid rgba(51,51,51,.3);
          background-color: rgba(0,196,204,.8);
          color: white;
          width: 300px;
          margin: 0 auto;
        }

        .experience-cta-button:hover {
          color: rgba(0,196,204,1);
          background-color: rgba(250,250,250,.9);
          border: 1px solid rgba(51,51,51,.5);
        }

        .text-container {
          margin-left: 7.5%;
          margin-right: 7.5%;
          margin-top: 48px;
          margin-bottom: 48px;
        }

        .text-container h2 {
          font-size: 32px;
          font-weight: 400;
          color: rgba(0,196,204,1);
        }

        .text-container h3 {
          font-size: 30px;
          font-weight: 300;
        }

        .text-container p {
          font-size: 16px;
          color: rgba(37,37,37,.7);
        }

        .section-header {
          display: flex;
          align-items: center;
          height: 60px;
          text-align: center;
        }

        .section-header img {
          width: 36px;
          margin-right: 8px;
        }

        .section-header h2 {
          margin: 0;
        }
        @media(max-width: 768px) {
          .btn-container {
            flex-direction: column
          }

          .img-1 {
            background-position: center;
          }

          .experience-image-row {
            flex-direction: column;
          }
        }


      `}</style>
    </div>
  );
}

export default ExperiencePageContent;
