import Link from 'next/link';
import Layout from '../components/Layout'
import White from '../components/Sections/White';
import LightGrey from '../components/Sections/LightGrey';

const properties = {
  head: {
    title: 'James Wallis'
  },
  header: {
    h1: 'Resume',
    h2: 'experience and qualifications',
    image: 'pen-on-paper.jpeg',
    height: 80
  }
}

export default class extends React.Component {
  render() {
    return <Layout {...properties} >
      <LightGrey>
        <h3>Personal Profile</h3>
        <p>
          A highly motivated, professional final year Computer Science 
          undergraduate seeking a graduate opportunity in the computing 
          sector to further develop skills and contribute to a company’s 
          successes. A hard working, self-motivated individual who can 
          work alone or as part of a team. Strengths include the ability 
          to make rational judgements and solve problems logically with 
          a planned approach.
        </p>
        <a href='/static/james-wallis-cv.pdf' download='JamesWallisCV.pdf' className='button'>
          Download CV
        </a>
      </LightGrey>
      <White>
        <h3>Education</h3>
        <h4>The University of Portsmouth, BSc (Hons) in Computer Science</h4>
        <p className='year'>2015-2019</p>
        <p>
          The degree is focussed on studying the topics of: Programming 
          and Maths, Computer Architecture, Database Design and Development, 
          Web Foundations and Network Fundamentals. The course combines 
          practical projects and theoretical study with group and solo work. 
          This, combined with my placement year at IBM, has helped me develop 
          technical and transferable skills in:
        </p>
        <ul className='education'>
          <li><strong>Web Development Languages: </strong>HTML5, CSS3, JavaScript, Node.js and PHP.</li>
          <li><strong>Programming Languages: </strong>Python, Java (Using the BlueJ and Netbean IDEs), Haskell and Bash.</li>
          <li><strong>Containerisation Systems: </strong>Docker and Kubernetes.</li>
          <li>
            <strong>Time Management: </strong>Constantly re-evalutating time spent on certain 
            projects to ensure that I can get the highest grade in all subjects. 
            I have utilised this skill in every subject so far and at IBM where 
            I worked in two week agile iterations and had to ensure that any 
            work I was assigned to was finished in a single iteration.
          </li>
          <li>
            <strong>Team Work: </strong>Regularily worked in a team ranging from three to six 
            people to complete coursework projects. Able to inspire and 
            motivate team members and help them learn how to complete any task 
            to a high professional standard. During my placement at IBM I was 
            part of an agile nine person team. Took part in daily scrums to 
            give status on work items. Willing to ask questions to the team 
            and provide help when asked upon.
          </li>
          <li>
            <strong>Report Writing: </strong>Strong analytical skills enabling me to take 
            various sources of information and communicate what I have 
            found in a structured and coherent way. Use Microsoft Word 
            to present findings in the manner of a persuasive argument 
            through a written report. Wrote a Literature Review in my 
            first year on the topic of Sustainable Computing which I 
            received a first grading for.
          </li>
        </ul>
        <h4>Ashlyns School</h4>
        <p className='year'>2010-2015</p>
        <p>I completed my GCSE and A Level qualifications at Ashlyns Secondary School.</p>
        <p><strong>A-Level: </strong>ICT: A, Extended Project Qualification: B, Government and Politics: C, History: D.</p>
        <p><strong>GCSE: </strong>10 GCSE’s A-C including Maths: A, ICT: Merit, English Language and Literature: B &amp; C.</p>
        
      </White>
      <White border>
        <h3>Experience</h3>
        <h4>IBM</h4>
        <p className='job-title'>University Placement Year</p>
        <p className='year'>2017-2018</p>
        <p>
          Spent my placement year working at IBM Hursley as a software 
          developer. Worked heavily on Microclimate, an application 
          specialising in development for containerised environments. 
          Also developed features for the appmetrics products which 
          focus on application performance monitoring.
        </p>
        <ul>
          <li>
            Worked on a major IBM product, Microclimate, from its 
            prototype to its general announcement.
          </li>
          <li>
            Obtained expertise in Node.js, bash, Docker, Kubernetes 
            and Git while developing a containerised application.
          </li>
          <li>
            Took part in many status calls with IBM executives 
            and Microclimate stakeholders providing my own ideas and
            opinions while discussing what features should implemented.
          </li>
          <li>
            Contributed to an open source projects such as appmetrics-dash, 
            javametrics and generator-nodeserver.
          </li>
        </ul>
        <h4>WallisConsultancy.co.uk</h4>
        <p className='job-title'>Development &amp; maintenance</p>
        <p className='year'>2016-Present</p>
        <p>
          Started as a summer project which consisted of overhauling my Dad’s 
          business website. I now look after it and make changes when he requests them.
        </p>
        <ul>
          <li>
            Built a new user friendly design to replace his 
            outdated non-responsive layout.
          </li>
          <li>
            Gained further knowledge on HTML5 &amp; CSS3 as well as introducing 
            myself to PHP and JavaScript. Building the website enabled me to 
            practice and implement skills learnt at university and by 
            completing external work in a real world environment.
          </li>
          <li>
            Released a professional website which is used as the 
            main platform to push the business to customers.
          </li>
        </ul>
        <Link href='/portfolio/wallisconsultancy'>
          <a className='button'>
            View in Portfolio
          </a>
        </Link>
        <h4>Salsa Mish</h4>
        <p className='job-title'>Part time/on call</p>
        <p className='year'>2014-Present</p>
        <p>
          Salsa Mish is a major salsa club that takes place every Friday 
          in St Albans. Has only a small team of around 10 people. 
          Started with Mish asking me to fill in for a team member 
          in the car park but has turned into me being his go-to 
          person when a regular team member cannot make it as I have 
          experience in every job he needs doing.
        </p>
        <ul>
          <li>
            Work in a fast paced environment with the club needing 
            to be set up and closed down within 30 minutes.
          </li>
          <li>
            Learned to be versatile as I have to perform a variety 
            of roles which I get assigned on the night.
          </li>
        </ul>
        <h4>Potten End First School</h4>
        <p className='job-title'>IT Support</p>
        <p className='year'>2016-2017</p>
        <p>
          Summer Work Experience at Potten End First School 
          which led to a paid position on return from University at Christmas.
        </p>
        <ul>
          <li>
            Overhauled an outdated computer system to install a 
            new operating system and necessary programs.
          </li>
          <li>
            Merged an existing server with new computers in order 
            to create a network used for file storage.
          </li>
          <li>
            Explained changes made to the computers to teachers in layman’s terms.
          </li>
        </ul>
        <h4>Deliveroo</h4>
        <p className='job-title'>Cycle Courier</p>
        <p className='year'>2016-2017</p>
        <p>
          Deliveroo is a UK company which provides an online food 
          delivery service. My role was to pick up food from a 
          restaurant and deliver it to the customer.
        </p>
        <ul>
          <li>
            Focussed on delivering the food to the customer 
            in a safe but expeditious time.
          </li>
          <li>
            Promote the company by talking to the public and 
            answering questions about what we do. Deliveroo is 
            relatively new to Portsmouth.
          </li>
        </ul>
        <h4>Martin's Pond</h4>
        <p className='job-title'>Waiter</p>
        <p className='year'>2012-2016</p>
        <p>
          Martin's Pond is a small village pub that is very popular 
          for its fabulous food. I worked in a busy and challenging 
          environment as a waiter at all times. This job included 
          running food and drinks and ensuring that all guests were happy.
        </p>
        <ul>
          <li>
            Built up my confidence and gained experience in building 
            relationships with guests as ensuring that customers 
            enjoyed their experience in the restaurant was a top priority.
          </li>
          <li>
            Strengthened my ability to negotiate with guests and compose 
            myself during difficult situations while having conversations 
            with customers to solve the conflict.
          </li>
          <li>
            Sold raffle tickets for charity events that the restaurant 
            supported, leading me to sell them on many occasions as 
            I was seen as an effective salesman.
          </li>
        </ul>
        <h4>Kumon</h4>
        <p className='job-title'>Instructor/Tutor</p>
        <p className='year'>2010-2015</p>
        <p>
          Once a week after school, I worked with the local Kumon club. 
          Kumon is a tutoring company centered on developing a student’s 
          individual instruction using carefully crafted worksheets.
        </p>
        <ul>
          <li>
            Taught primary and secondary school students Maths and English.
          </li>
          <li>
            Able to convey a complex problem in a simple manner leading to 
            the student being able to solve it themselves.
          </li>
          <li>
            Developed time management skills in order to distribute and 
            mark work at the same time as providing assisting
            students with their work. All this had to be done in a two-hour period.
          </li>
        </ul>
        <h4>O2 Head Office</h4>
        <p className='job-title'>Work Experience</p>
        <p className='year'>2012</p>
        <p>
          A week’s work experience at 02’s head office in Slough.
        </p>
        <ul>
          <li>
            Created and reviewed a presentation based on the 
            O2 project ‘Think Big’ which encouraged young 
            people to become involved in technological advancement, 
            additionally I contributed to the project meetings.
          </li>
          <li>
            Acquired knowledge on how O2’s system architecture is configured.
          </li>
          <li>
            Met a range of stakeholders with different roles at O2 in a 
            professional environment which aided in my development of 
            my communication and network skills.
          </li>
        </ul>
        
      </White>
      <White border>
        <h3>Activities / Interests</h3>
        <ul>
          <li>
            Keeping up-to-date with the latest technology, such as home automation.
          </li>
          <li>
            I have been sailing from a young age, and still love being 
            out on the water. It was one of the main reasons I
            decided to study at Portsmouth University. Sailing has 
            taught me good team work as performing a manoeuvre without 
            communication could potentially capsize the boat.
          </li>
        </ul>
      </White>
      <style jsx>{`
        h3, h4, .job-title, .year {
          font-size: 26px;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 2px;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
          margin-bottom: 30px;
        }
        h4 {
          font-size: 20px;
          margin-top: 60px;
          margin-bottom: 0;
        }
        h4:first-of-type {
          margin-top: 0;
        }
        .button {
          border: 1px solid black;
          padding: 10px 20px;
          cursor: pointer !important;
          width: 20%;
          margin: 0 auto;
          margin-top: 20px;
          opacity: 0.5;
          transition: 0.2s opacity;
          display: block;
          color: black;
          text-decoration: none;
        }
        .button:hover {
          opacity: 1;
        }
        .job-title, .year {
          font-size: 14px;
          margin: 0;
          padding: 0;
        }
        .year {
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          font-weight: 200;
          font-family: 'Roboto', sans-serif;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
          text-align: justify;
          // text-align-last: center;
        }
        ul {
          padding: 0;
          padding-left: 20px;
        }
        li {
          text-align: justify;
          font-weight: 200;
          font-size: 18px;
          margin-bottom: 8px;
          list-style-type: circle;
        }
        ul.education {
          padding: 0;
        }
        ul.education li {
          list-style-type: none;
        }
      `}</style>
    </Layout>
  }
}