import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import styles from "./team.module.scss";

const memberData = [
  ["Andrew Osorio", "President", "Computer Science", "2023", "[Description]"],
  ["VP External", "VP External", "[Major]", "[Year]", "[Description]"],
  [
    "Andrew Zeng",
    "VP Internal",
    "Computer Science",
    "2023",
    "My name is Andrew Zeng, and I am a sophomore studying Computer Science in the College of Arts and Sciences. I joined NOBE because I believe that an understanding of the principles of business and how it meshes with engineering is a requirement for fruitful teamwork and innovation as a developer. I also aim to build meaningful connections with those in sectors both adjacent and remote from my own. I am also a member of the Business and Communications Team at Cornell Cup Robotics, where I work on kickstarter development and marketing.",
  ],
  [
    "Jeremy Jung",
    "VP of Technology",
    "Mathematics + Computer Science",
    "2023",
    "My name is Jeremy Jung, and I am a sophomore majoring in mathematics and computer science in the College of Arts and Sciences. I joined NOBE because I am interested in the growing applications of technology in business. Outside of NOBE, I am a frontend developer on Queue Me In for Cornell Design & Tech Initiative, and I am also the founder of CashPal, a budgeting app on the App Store. In my free time, I make beats on my computer for upcoming rappers :).",
  ],
  [
    "Kian Sorhaindo",
    "VP of Marketing",
    "Civil Engineering",
    "2023",
    "I am Kian Sorhaindo, a sophomore of the class of 2023 majoring in civil engineering. I joined NOBE to get more people involved with the business side of engineering and broaden my knowledge in the business and engineering sector. At school I am part of a project team called Cornell Seismic Design that designs and builds a 5-foot model tower that must withstand a simulated seismic event. I also enjoy carpentry and last summer I built three wooden Adirondack deck chairs out of a tree from my yard.",
  ],
  [
    "Titus Pierce",
    "VP of Finance",
    "Civil Engineering",
    "2023",
    "I’m Titus Pierce, a sophomore (class of 2023) majoring in civil engineering. I joined NOBE to explore the important links between the engineering and business worlds, and hope to meet people with the same goal in mind. The importance of an understanding between these two areas is integral to innovation and advancements. Currently, I am a member of the Cayuga Heights Fire Department where I volunteer during the school year. I am looking forward to what is ahead with NOBE this semester and into the future.",
  ],
  [
    "Eva Zhang",
    "VP of Recruitment",
    "Operations Research Engineering",
    "2023",
    "I am Eva Zhang, a sophomore (class of 2023) majoring in Operations Research Engineering. I joined NOBE to not only meet like-minded peers, but also explore how I can better use my engineering knowledge in business. Currently, I am a member of a project team Cornell Cup Robotics, and work in the business/communications subteam. I am also the treasurer of Cornell Club Waterpolo. Last summer, I taught piano and music theory at a non-profit organization, and I still enjoy doing that in my free time.",
  ],
  [
    "Bryan Fuchs",
    "Secretary",
    "Mechanical Engineering",
    "2023",
    "I’m Bryan Fuchs, a sophomore (class of 2023) in CoE majoring in mechanical engineering. I joined NOBE to gain opportunities to meet professionals who are interested in business and engineering, and learn how the two can be integrated into one practice. I am also a member of Cornell Baja Racing, where I work with the team to design and build an off-road vehicle to compete against the best teams in the world. As technology evolves and is actively implemented in business decisions, engineering will become an invaluable asset. Therefore, NOBE will be able to put me one step ahead, and prepare me for the demands I will face as a member in the workforce.",
  ],
];

export default function Team() {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <h1 className={styles.category}>Executive Board</h1>
      <hr></hr>
      <EBoard />
      <CommitteeLeads />
      <Footer />
    </div>
  );
}

/**
 * Generate the descriptions, headshots, and profile information of
 * the eBoard members
 */
function EBoard(props) {
  var mems = memberData.map((x) => createMember(x));
  return <section className={styles.eboard_roster}>{mems}</section>;
}

function CommitteeLeads(props) {
  return (
    <section>
      <h1 className={styles.category}>Committee Leads</h1>
      <hr></hr>
    </section>
  );
}

function createMember(memberData) {
  var memberProps = {
    name: memberData[0],
    title: memberData[1],
    major: memberData[2],
    year: memberData[3],
    description: memberData[4],
  };
  return EBoardMember(memberProps);
}

/**
 * Generate the descriptions, headshots, and profile information of
 * an eBoardMember
 * @param name: The name of the E-Board member
 * @param title: The title of the E-Board member
 * @param description: The description of the E-Board member
 */
function EBoardMember(props) {
  var firstLastName = props.name.toLowerCase().split(" ");
  var headshotName = firstLastName[0] + "_" + firstLastName[1] + ".jpg";
  return (
    <div className={styles.eboard_member}>
      <div className={styles.profile}>
        <Headshot path={headshotName} />
        <h3 className={styles.name}>{props.name}</h3>
        <h4 className={styles.title}>{props.title}</h4>
        <h5 className={styles.subtitle}>{`Major: ${props.major}`}</h5>
        <h5 className={styles.subtitle}>{`Year: ${props.year}`}</h5>
      </div>
      <div className={styles.description_wrapper}>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}

function Headshot({ path }) {
  var hsPath = `/headshots/${path}`;
  return (
    <img
      src={hsPath}
      onError={(e) => {
        e.currentTarget.src = "/headshots/placeholder.jpg";
      }}
      className={styles.headshot}
      alt="path"
    />
  );
}
