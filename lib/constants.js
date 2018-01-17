export const SERVER_URL = 'https://cross-world-medics-server.herokuapp.com';
// export const STRIPE_PUBLISHABLE = 'pk_live_ViDmnAdk2mjsZIrs538EBilJ';
// export const SERVER_URL = 'http://localhost:1337';
export const STRIPE_PUBLISHABLE = 'pk_test_9UG4xl53fmuK8oH87FFc8tWF';
export const typeformURL = 'https://oneheartsource.typeform.com/to/t3bA9q?refcode=';
export const ENROLLMENT_FEE = 300;
export const programFees = {
  oneWeek: 2400,
  twoWeek: 3800,
};
export const PROGRAM_STATUS = {
  CLOSED_WAITLIST_FULL: 'CLOSED_WAITLIST_FULL',
  FULL_WAITLIST_OPEN: 'FULL_WAITLIST_OPEN',
  FULL_WAITLIST_CLOSED: 'FULL_WAITLIST_CLOSED',
  OPEN: 'OPEN',
};

export const USER_STATUS = {
  APPLIED: 'applied',
  ACCEPTED: 'accepted',
  ENROLLED: 'enrolled',
  ENROLLED_WAITLIST: 'enrolled_waitlist',
  CONFIRMED: 'confirmed',
  DENIED: 'denied',
  DEFERRED: 'deferred'
};

export const programDates = [
  {
    "id" : "medical-2-june11-june22",
    "type" : "Medical",
    "typeId" : "medical",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 11 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 1
  },
  {
    "id" : "medical-2-june25-july6",
    "type" : "Medical",
    "typeId" : "medical",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 25 - July 6",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 2
  },
  {
    "id" : "medical-2-july9-july13",
    "type" : "Medical",
    "typeId" : "medical",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "July 9 - July 13",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 3
  },
  {
    "id" : "medical-1-june4-june8",
    "type" : "Medical",
    "typeId" : "medical",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 4 - June 8",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 4
  },
  {
    "id" : "medical-1-june11-june22",
    "type" : "Medical",
    "typeId" : "medical",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 11 - June 15",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 5
  },
  {
    "id" : "medical-1-june18-june22",
    "type" : "Medical",
    "typeId" : "medical",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 18 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 6
  },
  {
    "id" : "medical-1-june25-june29",
    "type" : "Medical",
    "typeId" : "medical",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 25 - June 29",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 7
  },
  {
    "id" : "nursing-2-june11-june22",
    "type" : "Nursing",
    "typeId" : "nursing",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 11 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 1
  },
  {
    "id" : "nursing-2-june25-july6",
    "type" : "Nursing",
    "typeId" : "nursing",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 25 - July 6",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 2
  },
  {
    "id" : "nursing-2-july9-july13",
    "type" : "Nursing",
    "typeId" : "nursing",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "July 9 - July 13",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 3
  },
  {
    "id" : "nursing-1-june4-june8",
    "type" : "Nursing",
    "typeId" : "nursing",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 4 - June 8",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 4
  },
  {
    "id" : "nursing-1-june11-june22",
    "type" : "Nursing",
    "typeId" : "nursing",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 11 - June 15",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 5
  },
  {
    "id" : "nursing-1-june18-june22",
    "type" : "Nursing",
    "typeId" : "nursing",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 18 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 6
  },
  {
    "id" : "nursing-1-june25-june29",
    "type" : "Nursing",
    "typeId" : "nursing",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 25 - June 29",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 7
  },
  {
    "id" : "midwifery-2-june11-june22",
    "type" : "Midwifery",
    "typeId" : "midwifery",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 11 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 1
  },
  {
    "id" : "midwifery-2-june25-july6",
    "type" : "Midwifery",
    "typeId" : "midwifery",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 25 - July 6",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 2
  },
  {
    "id" : "midwifery-2-july9-july13",
    "type" : "Midwifery",
    "typeId" : "midwifery",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "July 9 - July 13",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 3
  },
  {
    "id" : "midwifery-1-june4-june8",
    "type" : "Midwifery",
    "typeId" : "midwifery",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 4 - June 8",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 4
  },
  {
    "id" : "midwifery-1-june11-june22",
    "type" : "Midwifery",
    "typeId" : "midwifery",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 11 - June 15",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 5
  },
  {
    "id" : "midwifery-1-june18-june22",
    "type" : "Midwifery",
    "typeId" : "midwifery",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 18 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 6
  },
  {
    "id" : "midwifery-1-june25-june29",
    "type" : "Midwifery",
    "typeId" : "midwifery",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 25 - June 29",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 7
  },
  {
    "id" : "veterinary-2-june11-june22",
    "type" : "Veterinary",
    "typeId" : "veterinary",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 11 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 1
  },
  {
    "id" : "veterinary-2-june25-july6",
    "type" : "Veterinary",
    "typeId" : "veterinary",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "June 25 - July 6",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 2
  },
  {
    "id" : "veterinary-2-july9-july13",
    "type" : "Veterinary",
    "typeId" : "veterinary",
    "length" : "2 week",
    "lengthId" : "twoWeek",
    "date" : "July 9 - July 13",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 3
  },
  {
    "id" : "veterinary-1-june4-june8",
    "type" : "Veterinary",
    "typeId" : "veterinary",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 4 - June 8",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 4
  },
  {
    "id" : "veterinary-1-june11-june22",
    "type" : "Veterinary",
    "typeId" : "veterinary",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 11 - June 15",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 5
  },
  {
    "id" : "veterinary-1-june18-june22",
    "type" : "Veterinary",
    "typeId" : "veterinary",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 18 - June 22",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 6
  },
  {
    "id" : "veterinary-1-june25-june29",
    "type" : "Veterinary",
    "typeId" : "veterinary",
    "length" : "1 week",
    "lengthId" : "oneWeek",
    "date" : "June 25 - June 29",
    "enrolled" : 0,
    "confirmed" : 0,
    "capacity" : 20,
    "manualClose" : false,
    "waitlist" : [ ],
    "order" : 7
  }
];

export const faqs = [
  {
    sectionTitle: 'Admissions and Eligibility',
    faqs: [
      {
        id: 1,
        question: 'I noticed there are many application deadlines—when should I apply?',
        answer: 'Positions are highly limited to ensure the highest program quality. You can apply at any time, for any program, before any of the application deadlines. However, spaces fill up fast and once they are full you will have to apply for a waitlist position.',
      },
      {
        id: 2,
        question: 'Do you have to be a student to qualify for the programs?',
        answer: 'Yes. You must currently be enrolled in or graduated from a college or university and be between the age of 18-25.',
      },
      {
        id: 3,
        question: 'Where do Cross World Medics come from?',
        answer: 'Cross World Medics originated as One Heart Source in 2008 and has now evolved into a stand alone medical organization. Since 2008 over 1,200 students from more than 100+ universities, representing dozens of countries worldwide have participated in our programs. ',
      },
      {
        id: 4,
        question: 'What prior experience, if any, is required to participate?',
        answer: 'Cross World Medics emphasizes a collaborative and diverse environment that is inquiry led. No prerequisite knowledge base is required; however, a strong desire to become a health professional is recommended. If you are looking for a non-health based program we can recommend other opportunities to better suit your goals. ',
      },
    ],
  },
  {
    sectionTitle: 'The Experience',
    faqs: [
      {
        id: 5,
        question: 'Will I be trained before the start of my program?',
        answer: 'Your onboarding process will begin once your deposit is made and will continue to increase as you approach flight day. A comprehensive orientation will then be provided upon arrival in country. Support and training will continue throughout the program.',
      },
      {
        id: 6,
        question: 'What is the level of leadership and involvement of CWN Interns in the program, and how can I contribute to the design and implementation of the program?',
        answer: 'Our interns hail from all national and social backgrounds, which, we believe, adds to the evolution and development of our programs and our organization. Throughout all CWM programs we strongly encourage interns to take initiative and develop ideas and projects that utilize their individual strengths and skills to benefit the communities we work with.',
      },
      {
        id: 7,
        question: 'Will there be time for personal travel during the programs?',
        answer: 'Yes! Cape Town is a beautiful place with a rich history and culture. You will be able to spend time exploring the city and surrounding areas during weekends. Weekends are free, and many interns choose to go on safaris, skydiving, hiking, shark cage-diving, or other local excursions. CWM Interns also receive group discounts on most excursions. If you are interested in more extensive travel, we suggest you schedule time before or after your program dates to do so. CWM Interns also receive group discounts on most excursions.',
      },
      {
        id: 8,
        question: 'What are the safety concerns and/or procedures abroad?',
        answer: 'Safety is our number one priority. All internship experiences are planned and executed with your safety as our first concern. During program hours, Interns are always under supervision of OHS Leadership. In all locations, a vehicle is available 24/7 in case of emergency. Volunteer living accommodations are secure. We are confident that you will find our locations to be warm and welcoming; however, as is the case in any foreign country or city, travel abroad does pose risks and requires safe, smart travel techniques. Upon arrival you will be educated on and familiarized with your immediate location to ensure a comfortable stay. CWM Leadership is available 24/7 should there be any concerns.',
      },
    ],
  },
  {
    sectionTitle: 'Travel',
    faqs: [
      {
        id: 9,
        question: 'Does CWM book flights for volunteers?',
        answer: 'Because our interns come from all over the world, CWM does not book flights for our interns. However, CWM interns utilize our partnership with STA (Student Travel Agency) who will help organize group flights for interns.',
      },
      {
        id: 10,
        question: 'As a volunteer, will I travel alone or with a group of volunteers?',
        answer: 'Once our volunteer positions are filled, contact information is exchanged with fellow members so that you can book flights together if you would like. We encourage traveling together when possible! During the program, transportation is provided by CWM, and volunteers travel together.',
      },
      {
        id: 11,
        question: 'Will I be picked up upon arrival?',
        answer: 'Yes! CWM will pick up all interns upon arrival. There are arrival and departure guidelines presented in the Logistics Manual to assist in ensuring appropriate arrival and departure times.',
      },
      {
        id: 12,
        question: 'When am I expected to arrive in country?',
        answer: 'The program officially begins at 5:00 p.m. on the program start-date, so you may arrive in country that day if you arrive before 2:00 p.m. However, most people choose to arrive a day or two before the program start-date in order to acclimate. The program end-date is a full day of scheduled activities until 5:00 p.m. Checkout is 10:00 a.m. the following day. Participating for the full length of the program is mandatory. If you are concerned about time conflicts, please contact CWM staff to see if an accommodation can be made.',
      },
    ],
  },
  {
    sectionTitle: 'Fundraising & Program Fees',
    faqs: [
      {
        id: 13,
        question: 'Does CWM offer any financial aid or sponsorships?',
        answer: 'As a non-profit organization, Cross World Medics does not currently offer any financial aid or sponsorships. We do, however, strongly encourage fundraising your program fee through the help of friends, family, and various fundraising campaigns. See our fundraising page for best practices. ',
      },
      {
        id: 14,
        question: 'Are donations tax-deductible for non-U.S. residents?',
        answer: 'CWM is a registered non-profit in the state of California and federally in the United States.; therefore, CWM can only offer tax deductible receipts in the US.',
      },
    ],
  },
  {
    sectionTitle: 'Academic Credit and Medical School Applications',
    faqs: [
      {
        id: 15,
        question: 'Can I receive academic credit or volunteer hours for my program?',
        answer: 'Absolutely. Many interns have received academic credit or certified volunteer hours for participating in a program. We suggest that you contact your school advisor or Department Head to inquire about any opportunities that may be available for you to receive academic credit. CWM staff can serve as your proctor for research or course credit if needed. ',
      },
      {
        id: 16,
        question: 'Is it possible for CWM Staff to write a letter of recommendation, if necessary?',
        answer: 'Yes. In some cases more than one letter of recommendation can be requested. Based on your tenure with CWM letters maybe requested from staff, physicians, and executives. We serve as a tribe of medics and foster our community. We want you to succeed, so we are here for you on your journey to becoming a health professional. ',
      },
    ],
  },
];

export const experiencePageData = [
  {
    sectionId: 1,
    sectionTitle: 'Before You Go',
    imageUrl: 'https://s3.amazonaws.com/health-corps-international/sample-experience-1.jpg',
    imagePosition: 'right',
    content: [
      {
        contentId: 1,
        type: 'p',
        text: 'Registration is easy, simply apply and reserve your space by paying the $300 registration fee.',
      },
      {
        contentId: 2,
        type: 'p',
        text: 'Our programs take place during major breaks (Spring, Summer, and Winter) in the academic school year. Please keep in mind that programs running from May to August fill up in advance so we recommend registering early to ensure the date you want.'
      },
      {
        contentId: 3,
        type: 'p',
        text: 'Our continuum team will then contact you to welcome you to the program and provide you access to your account and team channel where you can interact with other medical interns on your program.'
      },
      {
        contentId: 4,
        type: 'p',
        text: 'Registration covers pre-departure support from our team, the processing of your application, the creation of your team channel, intern handbook, and housing deposit. The remainder of your program fee is required within 90 days before your program start date.'
      },
    ]
  },
  {
    sectionId: 2,
    sectionTitle: 'A Continuum of Professional Support',
    content: [
      {
        contentId: 5,
        type: 'p',
        text: 'Our team is located in the United States and South Africa. This creates a seamless transition for our medical interns since there is no placement or hand off process. Our personal and professional staff is with you from the minute you apply to the moment you land in Cape Town. Friendly and accessible they have detailed knowledge of every step of your program.'
      },
      {
        contentId: 6,
        type: 'p',
        text: 'After you register, you’’ receive access to your Slack channel. In your team channel you will get to meet the other interns and staff on your program and also receive all of the information required to stay on track and successfully prepare for your trip.'
      }
    ]
  },
  {
    sectionId: 3,
    sectionTitle: 'Flights and Insurance',
    content: [
      {
       contentId: 7,
       type: 'p',
       text: 'We don’t include flights in our programs because our interns join us from all over the world. However, our interns have special access to our partnership with STA (Student Travel Agency) who will help you find great deals and assist in pairing you to travel with a fellow intern if you wish.'
      },
      {
        contentId: 8,
        type: 'p',
        text: 'Just as when you travel on holiday, you’ll have to take out a good personal travel insurance, which needs to cover you while working in a hospital (not all policies do). STA can help you find the right insurance policy for you. '
      }
    ]
  },
  {
    sectionId: 4,
    sectionTitle: 'Health Preparations',
    content: [
      {
        contentId: 9,
        type: 'p',
        text: 'An amazing experience abroad requires you to be properly prepared and this includes having the right vaccines and vaccination. We strongly recommend that you arrange a visit with your doctor or a travel clinic before your trip. '
      }
    ]
  },
  {
    sectionId: 5,
    sectionTitle: 'You’re Clinical Experience',
    content: [
      {
        contentId: 10,
        type: 'p',
        text: 'Before your travel, we’ll provide you with the details of the hospital/clinic and departments you’ll be interning in, your placement mentors and other students who will be there via personal Cross World Medics channel.'
      },
      {
        contentId: 11,
        type: 'p',
        text: 'Please keep in mind that health professionals can change department'
      }
    ]
  },
  {
    sectionId: 6,
    sectionTitle: 'In Country',
    content: [
      {
        contentId: 12,
        type: 'p',
        text: 'Upon arrival, a staff member will meet you at the airport and take you to the Cross World Medics Residence. You’ll then receive your welcome package and tour of the property. We know you’ve been on a long journey and have scheduled time for you to freshen up and relax on your first day before your welcome briefing. '
      },
      {
        contentId: 13,
        type: 'p',
        text: 'After a good night’s sleep you will attend the formal orientation. During this time you will go over all elements of your program including but not limited to clinical placement, introduction to the community, basic Xhosa lesson, and safety. During orientation you will be receiving your official Cross World Medics white coat and then you will head to visit your medical site.'
      }
    ]
  },
  {
    sectionId: 7,
    sectionTitle: 'Medical Shadowing Experience',
    content: [
      {
        contentId: 14,
        type: 'p',
        text: 'You will be shadowing a healthcare professional suited to your chosen discipline (e.g. doctor, nurse, midwife). Generally you will spend 5-8 hours a day in the clinical setting from Monday - Thursday, with a half day on Friday to allow you to optimize your weekend excursions. Hospital and Clinical schedules do change depending on physician availability and demand, so it is possible that your schedule may change slightly or that you may shadow more than one physician. Cross World Medics puts in the added effort to try and match you to the rotation of your choice; however, we do not guarantee specific specialty placements.'
      }
    ]
  },
  {
    sectionId: 8,
    sectionTitle: 'Beyond Shadowing',
    content: [
      {
        contentId: 15,
        type: 'p',
        text: 'This is where Cross World Medics truly distinguishes itself. Beyond offering a world class medical shadowing program we have designed a series of experiences to contextualize the state of health, culture, and innovation in South Africa. In the past this has included on site work with a Forbes Top 30 Under 30 Health Entrepreneur, exploring the history of Cape Town with a PBS documentarian and historian, or analyzing the past, present, and future of medicine with a world renowned traditional healer. Our staff strives to create life changing and life empowering programs on a daily basis.'
      }
    ]
  },
  {
    sectionId: 9,
    sectionTitle: 'Tracking Progress',
    content: [
      {
        contentId: 16,
        type: 'p',
        text: 'We want to offer the best medical programs in the world. Throughout your experience you will receive survey ‘s that will allow you to track your shadowing hours while providing important feedback. Each week Cross World Medics will provide you with a report card that tracks your progress. This report card will be referenced when it comes time to receive a letter of recommendation or proof of organizational involvement.'
      }
    ]
  },
  {
    sectionId: 10,
    sectionTitle: 'You’re Spare Time',
    content: [
      {
        contentId: 17,
        type: 'p',
        text: 'The weekends and evening are your free time. You may wish to stay at the Cross World Medics Residence or explore your new surroundings. Our staff is available to show you around and organize excursions for you. Cape Town, South Africa is one of the most unique places in the world with its own biome nestled between Table Mountain and beautiful beaches. Most of our interns book weekend group excursions to hang out with penguins at Boulder Beach and view lions and elephants on some of the best safaris in the world.'
      }
    ]
  },
  {
    sectionId: 11,
    sectionTitle: 'Post Program: The Journey Continues',
    content: [
      {
        contentId: 18,
        type: 'p',
        text: 'As an alumni of Cross World Medics you will have exclusive access to events, programs, and special offers. Once you become a registered physician you can then join our Tribe of Doctors who are determined to revolutionize modern medicine in the developing world. Alumni are also eligible to apply for fellowship positions upon the completion of their program.'
      }
    ]
  }
]