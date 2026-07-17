// ================================================================
//  ECO 1000 — COURSE CONFIGURATION
//  Hosted at: www.brandonsheridan.com/courses/eco1000/
//  Sources: eco1000_syllabus.tex (policies, grading, exam 1 & 2 dates,
//           instructor info) + ECO 1000 Course Calendar.xlsx (weekly
//           topics/readings/assignments — treated as authoritative
//           where the two disagreed).
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block       — semester, canvasId (canvasId changes every term)
//  2. INSTRUCTOR block   — office hours especially
//  3. EXAMS block        — final exam date/time not yet posted by Elon
//  4. SCHEDULE block      — week dates/topics each semester
//  All HTML pages pull from this file automatically — edit here, not there.
// ================================================================

// ================================================================
//  COURSE
// ================================================================
const COURSE = {
  code:        "ECO 1000",
  title:       "Principles of Economics",
  department:  "Economics, Love School of Business",
  semester:    "Fall 2026",                        // UPDATE each semester
  format:      "in-person",
  meeting:     "Sankey 104 · Tu/Th 10:30 AM – 12:10 PM",  // UPDATE
  credits:     4,                                   // inferred from Elon's ECO 1000 credit value — confirm
  baseUrl:     "https://www.brandonsheridan.com/courses/eco1000",
  canvasBase:  "https://elon.instructure.com",
  canvasId:    "1499",                              // UPDATE each semester
};

// ================================================================
//  INSTRUCTOR
// ================================================================
const INSTRUCTOR = {
  name:        "Brandon J. Sheridan",
  nameShort:   "Dr. Sheridan",
  email:       "bsheridan4@elon.edu",
  phone:       "(336) 278-5945",
  office:      "Koury Business Center (KoBC) 118",
  officeHours: "Tu/Th 3:00–5:00 PM · M 2:00–4:00 PM · and by appointment", // UPDATE each semester
  zoomUrl:     "https://elon.zoom.us/my/bsheridan4",
  zoomDisplay: "elon.zoom.us/my/bsheridan4",
};

// ================================================================
//  EXAMS
//  UPDATE: final exam date/time once Elon posts the final exam schedule
// ================================================================
const EXAMS = {
  policy: "Each exam is cumulative. A higher score on a later exam replaces " +
          "your score(s) on earlier exam(s) — this only works backwards, not " +
          "forwards. No make-up exams; if you miss Exam 1 or Exam 2, its " +
          "weight shifts to the next exam. There is no alternative for the " +
          "final exam.",
  exam1: { label: "Exam 1", date: "Thursday, September 24, 2026",
    note: "Calculator allowed; no phones." },
  exam2: { label: "Exam 2", date: "Thursday, October 29, 2026",
    note: "Calculator allowed; no phones. Bonus: wear an econ-themed Halloween costume for +1 pt." },
  final: { label: "Final Exam", date: "TBD", time: "TBD",
    note: "Elon has not yet posted the final exam schedule for this section — UPDATE once posted." },
};

// ================================================================
//  SCHEDULE
//  Source: ECO 1000 Course Calendar.xlsx (authoritative for topics).
//  weekStart drives the auto-highlight of the current week on checklist.html.
//  UPDATE dates/topics/assignments each semester.
// ================================================================
const SCHEDULE = {
  dates: {
    classesBegin:     "August 25, 2026",
    classesEnd:       "December 3, 2026",
    finalsWeek:       "December 8–12, 2026",
    withdrawDeadline: "Friday, October 30, 2026",
  },

  weeks: [
    { num: 1, label: "Week 1", weekStart: new Date(2026, 7, 25), dateRange: "Aug 25 – Aug 31",
      topic: "Ch. 1: The Four Core Principles of Economics",
      assignments: ["Intro Survey", "Ch. 1 LearningCurve: Core Principles", "Week 1 Participation Assignment (Sun Aug 31)"],
      note: null, examNote: null },
    { num: 2, label: "Week 2", weekStart: new Date(2026, 8, 1), dateRange: "Sep 1 – Sep 7",
      topic: "Ch. 8: Comparative Advantage and Gains from Trade",
      assignments: ["Ch. 8 LearningCurve: Gains from Trade", "Ch. 1 Homework: Core Principles", "Week 2 Participation Assignment (Sun Sep 7)"],
      note: "TBL #1 — Comparative Advantage", examNote: null },
    { num: 3, label: "Week 3", weekStart: new Date(2026, 8, 8), dateRange: "Sep 8 – Sep 14",
      topic: "Ch. 2: Demand and Consumer Choice · Ch. 3: Supply and Producer Choice · Ch. 4: Equilibrium — Where Supply Meets Demand",
      assignments: ["Ch. 2 LearningCurve: Demand (Mon Sep 8)", "Ch. 3 LearningCurve: Supply (Mon Sep 8)", "Ch. 8 Homework: Gains from Trade", "Week 3 Participation Assignment"],
      note: "Preview: TBL next week on Chs. 2, 3 & 4", examNote: null },
    { num: 4, label: "Week 4", weekStart: new Date(2026, 8, 15), dateRange: "Sep 15 – Sep 21",
      topic: "Ch. 5: Elasticity — Measuring Responsiveness (Review: Ch. 2, 3, 4 for TBL)",
      assignments: ["Ch. 4 LearningCurve: Equilibrium (Mon Sep 15)", "Ch. 2 Homework (Thu Sep 18)", "Ch. 3 Homework (Thu Sep 18)", "Week 4 Participation Assignment"],
      note: "TBL — Demand, Supply, and Equilibrium", examNote: "Exam 1 is next Thursday (Sep 24)" },
    { num: 5, label: "Week 5", weekStart: new Date(2026, 8, 22), dateRange: "Sep 22 – Sep 28",
      topic: "Exam 1 Review / Supply & Demand Practice",
      assignments: ["Ch. 4 Homework: Equilibrium (Tue Sep 23)"],
      note: null, examNote: "EXAM 1 — Thursday Sep 24 (calculator allowed; no phones)" },
    { num: 6, label: "Week 6", weekStart: new Date(2026, 8, 29), dateRange: "Sep 29 – Oct 5",
      topic: "Ch. 6: Taxes, Price Controls, and Quantity Regulations (Ch. 7 notes also assigned this week)",
      assignments: ["Ch. 6 LearningCurve: Government Intervention", "Week 6 Participation Assignment"],
      note: "Preview: TBL next week", examNote: null },
    { num: 7, label: "Week 7", weekStart: new Date(2026, 9, 6), dateRange: "Oct 6 – Oct 12",
      topic: "Ch. 7: Welfare Economics — Evaluating Market Efficiency and Market Failure · Ch. 10: Externalities and Public Goods",
      assignments: ["Ch. 7 LearningCurve: Market Efficiency and Failure (Mon Oct 6)", "Ch. 6 Homework: Government Intervention (Thu Oct 9)", "Week 7 Participation Assignment (Sun Oct 12)"],
      note: "TBL — Government Intervention and Economic Welfare", examNote: null },
    { num: 8, label: "Week 8", weekStart: new Date(2026, 9, 13), dateRange: "Oct 13 – Oct 19",
      topic: "Ch. 10: Externalities (continued)",
      assignments: ["Ch. 10 LearningCurve: Externalities (Mon Oct 13)", "Ch. 7 Homework: Market Efficiency and Failure (Tue Oct 14)"],
      note: "TBL on Externalities", examNote: null },
    { num: 9, label: "Week 9", weekStart: new Date(2026, 9, 20), dateRange: "Oct 20 – Oct 26",
      topic: "Ch. 14: Market Structure and Degrees of Market Power",
      assignments: ["Ch. 14 LearningCurve: Market Structure & Market Power (Mon Oct 20)", "Ch. 10 Homework: Externalities (Thu Oct 23)"],
      note: null, examNote: "Exam 2 is next Thursday (Oct 29)" },
    { num: 10, label: "Week 10", weekStart: new Date(2026, 9, 27), dateRange: "Oct 27 – Nov 2",
      topic: "Exam 2 Review",
      assignments: ["Ch. 14 Homework: Market Structure & Market Power (Mon Oct 27)"],
      note: "No drop-in hours Tuesday; available all day Wednesday", examNote: "EXAM 2 — Thursday Oct 29 (calculator allowed; no phones). Bonus: econ-themed Halloween costume = +1 pt" },
    { num: 11, label: "Week 11", weekStart: new Date(2026, 10, 3), dateRange: "Nov 3 – Nov 9",
      topic: "Ch. 21: Sizing Up the Economy Using GDP (macro unit begins)",
      assignments: ["Ch. 21 LearningCurve: GDP (Mon Nov 3)", "Week 11 Participation Assignment (Sun Nov 9)"],
      note: "TBL — GDP", examNote: null },
    { num: 12, label: "Week 12", weekStart: new Date(2026, 10, 10), dateRange: "Nov 10 – Nov 16",
      topic: "Ch. 23: Unemployment",
      assignments: ["Ch. 23 LearningCurve: Unemployment (Mon Nov 10)", "Ch. 21 Homework: GDP (Wed Nov 12)", "Week 12 Participation Assignment (Sun Nov 16)"],
      note: "No class Thursday (Nov 13) · drop-in hours virtual (Wed 1–3 PM)", examNote: null },
    { num: 13, label: "Week 13", weekStart: new Date(2026, 10, 17), dateRange: "Nov 17 – Nov 23",
      topic: "Ch. 24: Inflation and Money",
      assignments: ["Ch. 24 LearningCurve: Inflation (Mon Nov 17)", "Ch. 23 Homework: Unemployment (Thu Nov 20)"],
      note: "TBL — Unemployment and Inflation", examNote: null },
    { num: 14, label: "Week 14", weekStart: new Date(2026, 10, 24), dateRange: "Nov 24 – Nov 30",
      topic: "Thanksgiving Break — No Class",
      assignments: [],
      note: "Study for the final exam! Preview: Ch. 33 LearningCurve due Mon Dec 1", examNote: null },
    { num: 15, label: "Week 15", weekStart: new Date(2026, 11, 1), dateRange: "Dec 1 – Dec 7",
      topic: "Ch. 33: Aggregate Demand and Aggregate Supply",
      assignments: ["Ch. 33 LearningCurve: AD-AS (Mon Dec 1)", "Ch. 24 Homework: Inflation (Thu Dec 4)", "TBL Peer Review (Fri Dec 5 by 5 PM)"],
      note: "Final TBL on Thursday (based on Ch. 33)", examNote: "Final exam next week" },
    { num: 16, label: "Finals Week", weekStart: new Date(2026, 11, 8), dateRange: "Dec 8 – Dec 12",
      topic: "Finals Week",
      assignments: [],
      note: "Extra office hours: Sun 6:00–7:30 PM, KoBC 118", examNote: "FINAL EXAM — date/time TBD, see Exams above" },
  ],
};

// ================================================================
//  TEXTBOOK
// ================================================================
const TEXTBOOK = {
  authors:   "Betsey Stevenson and Justin Wolfers",
  title:     "Principles of Economics",
  edition:   "2nd",
  publisher: "Cengage Learning (Achieve)",
  isbn:      "9781319449995",
};

// ================================================================
//  GRADING
//  Weights sum to 100 — locked from the syllabus. UPDATE only if the
//  grading structure itself changes.
// ================================================================
const GRADING = {
  scale: "A 93–100 · A- 90–92.99 · B+ 87–89.99 · B 83–86.99 · B- 80–82.99 · " +
         "C+ 77–79.99 · C 73–76.99 · C- 70–72.99 · D+ 67–69.99 · D 63–66.99 · " +
         "D- 60–62.99 · F below 60",
  components: [
    { id: "attendance", label: "Attendance & Participation", weight: 5,
      note: "5 pts/class for attendance (lowest 4 dropped). Participation is weekly Moodle questions due Sunday nights." },
    { id: "learningcurve", label: "Learning Curve", weight: 5,
      note: "Achieve adaptive practice questions — unlimited attempts before the due date." },
    { id: "homework", label: "Homework", weight: 10,
      note: "One per chapter covered, via Achieve. Lowest grade dropped." },
    { id: "tbl", label: "Team-Based Learning", weight: 20,
      note: "iRATs, tRATs, application exercises, and a peer review. Point allocation across categories finalized as a class after the first two TBLs." },
    { id: "exam1", label: "Exam One", weight: 20, note: "Cumulative." },
    { id: "exam2", label: "Exam Two", weight: 20, note: "Cumulative." },
    { id: "final", label: "Final Exam", weight: 20, note: "Cumulative. No alternative date." },
  ],
};

// ================================================================
//  POLICIES
//  Static policy text sourced from eco1000_syllabus.tex.
//  UPDATE if language changes semester to semester.
// ================================================================
const POLICIES = {
  teachingPhilosophy:
    "I believe that teaching is fun and look forward to interacting with each of you throughout the " +
    "semester about economics and any other concerns you may have. I strongly believe that " +
    "&ldquo;learning by doing&rdquo; is the best way for students to learn, so class time will be a " +
    "mixture of lecture and active learning. Some people (maybe even you!) have preconceived notions " +
    "that economics is boring &mdash; better known as the &ldquo;dismal science.&rdquo; I intend to " +
    "prove otherwise by going beyond simple lectures of the material and showing how economics can be " +
    "applied to everyday life. The goal of this class is not only to teach you specific concepts and " +
    "techniques, but also to teach you to <strong>think critically</strong>. This is a vital skill to " +
    "have as you venture through life.",

  goals: [
    "Learn how people, businesses, and governments make decisions in the context of limited resources.",
    "Understand how markets work (and, sometimes, don't work) using a supply and demand framework.",
    "Understand how and why trade occurs, as well as how it affects our lives.",
    "Learn how to quantify the health of the economy (e.g., GDP, unemployment rate, inflation), what causes economic ups and downs, and how policy can promote growth.",
  ],

  materials: "Readings come from a variety of sources, but the main thing you need is access to " +
    "<strong>Achieve</strong>, an online learning platform that includes the e-textbook and the online " +
    "homework system. This course participates in Elon's &ldquo;First Day&rdquo; program, so Achieve " +
    "access is billed automatically through the Bursar's Office. Access it through Canvas, along with " +
    "your grades — check both, plus your Elon email, regularly for course updates.",

  aiPolicy: "Generative AI may be used to support your learning — e.g. quizzing yourself over course " +
    "material, asking AI to explain or clarify a concept, or using it as instructed for a class activity. " +
    "Achieve's built-in AI tools are fine to use. Using AI to bypass learning is not: submitting AI-generated " +
    "work as your own, or using AI during exams/assessments when prohibited, are Elon Honor Code violations. " +
    "When in doubt, ask.",

  classroom: [
    { title: "Be Prepared", body: "Attend class and skim the reading beforehand. Jot down a few notes or questions as you read. There's no such thing as a stupid question in class — and drop-in hours or email work too." },
    { title: "Be Courteous", body: "Be a kind human, and show up on time — a large part of this course is built on teamwork, and class starts promptly." },
  ],

  devicePolicy: "You cannot use laptops for note-taking and your phone should not be on your desk during " +
    "class time. A tablet is fine only if it lies flat on the desk with just a note-taking app open. We " +
    "have dedicated time for device use, including group activities and periodic breaks. Failure to " +
    "comply reduces your attendance and participation grade and may result in an Honor Code violation.",

  // Section 8 — course-specific policies (this instructor's own language)
  support: [
    { title: "Disabilities Resources", body: "Students requesting accommodations under the ADA should register with Disabilities Resources (KLC/Belk Library, Suite 226, 336-278-6568, disabilities@elon.edu). Already registered? Renew each semester via the Accommodate site." },
    { title: "Religious Holidays", body: "Complete the online Religious Observance Notification Form (RONF) within the first two weeks of the semester to arrange an excused absence for a conflicting holiday." },
    { title: "Care and Support", body: "If you're concerned about a classmate's well-being, share it with the instructor or directly with Elon's Student Care and Outreach program." },
    { title: "Honor Code", body: "Cheating will not be tolerated. See Elon's Honor Code policy." },
  ],

  // Section 9 — official Elon-wide boilerplate, same for every Elon syllabus
  campusResources: [
    { title: "Honor Code", body: "Elon's honor pledge calls for a commitment to Elon's shared values of Honesty, Integrity, Responsibility, and Respect. Review the <a href=\"https://www.elon.edu/u/student-conduct/honor-code/\" target=\"_blank\" rel=\"noopener\">policies described in the student handbook</a>. Violations in academic-related areas will be documented in an incident report maintained in the Office of Student Conduct and may result in a lowering of the course grade and/or failure of the course with an Honor Code F." },
    { title: "Office of Academic Accommodations and Accessibility", body: "Elon is committed to providing an inclusive experience and equal opportunity to students with disabilities in accordance with the ADA and Section 504. Contact AAA at 336.278.6568 or <a href=\"mailto:accommodations@elon.edu\">accommodations@elon.edu</a>. Accommodations can be requested at any time but are not retroactive. See the <a href=\"https://www.elon.edu/u/academics/koenigsberger-learning-center/academic-accommodations-accessibility/\" target=\"_blank\" rel=\"noopener\">AAA website</a>." },
    { title: "Learning Assistance", body: "The Koenigsberger Learning Center offers tutoring, success coaching, and other academic support. Visit the <a href=\"https://www.elon.edu/u/academics/koenigsberger-learning-center/learning-assistance/\" target=\"_blank\" rel=\"noopener\">Learning Assistance website</a> or email <a href=\"mailto:learningassistance@elon.edu\">learningassistance@elon.edu</a>." },
    { title: "Belk Library", body: "Librarians help students find resources for course assignments. <a href=\"https://elon.libcal.com/appointments/\" target=\"_blank\" rel=\"noopener\">Schedule an appointment</a> or chat with a librarian on the <a href=\"https://www.elon.edu/library/\" target=\"_blank\" rel=\"noopener\">library website</a>." },
    { title: "The Writing Center", body: "Located on the first floor of Belk Library, the <a href=\"https://www.elon.edu/u/academics/writing-excellence/the-writing-center/\" target=\"_blank\" rel=\"noopener\">Writing Center</a> is staffed by trained undergraduate consultants who work with students on any kind of writing at any stage." },
    { title: "Religious Holidays", body: "Elon has a <a href=\"https://www.elon.edu/u/truitt-center/multifaith-religious-holidays/holiday-observance-policy/\" target=\"_blank\" rel=\"noopener\">policy and procedures</a> for observing religious holidays that conflict with the academic calendar. Complete the online Religious Observance Notification Form (RONF) by the date published each semester, and make prior arrangements with the instructor." },
    { title: "Enrollment", body: "Confirm your enrollment through OnTrack. If you do not appear on the course roll, consult your instructor immediately." },
    { title: "Dropping a Course", body: "Courses may be dropped during the designated drop/add period through OnTrack; a dropped course will not appear on the transcript." },
    { title: "Withdrawing from a Course", body: "After drop/add, students may <a href=\"https://www.elon.edu/u/registrar/student-resources/individual-course-withdrawal/\" target=\"_blank\" rel=\"noopener\">withdraw from a course</a> without penalty before the published withdrawal deadline, via OnTrack, resulting in a &ldquo;W&rdquo; on the transcript. Do not assume you will be withdrawn automatically for non-attendance." },
    { title: "E-Warnings", body: "E-Warnings communicate with students and advisors when concerns arise about academic performance. Advisors are copied on every e-warning; this is a standard process, not a personal judgment." },
    { title: "Student Care & Outreach", body: "Concerned about a classmate's well-being? Share concerns through Elon's <a href=\"https://www.elon.edu/u/administration/student-life/dean-of-students/student-concerns-outreach/when-to-share-concerns/\" target=\"_blank\" rel=\"noopener\">Share a Concern</a> site, or see the <a href=\"https://www.elon.edu/u/administration/student-life/dean-of-students/student-concerns-outreach/resources/\" target=\"_blank\" rel=\"noopener\">Student Care and Outreach website</a>." },
    { title: "Substance Use", body: "Elon offers confidential, nonjudgmental, recovery-affirming support for students seeking to change their use of alcohol, cannabis, opioids, or other substances, including the Phoenix Free collegiate recovery program. Medical emergency? Call 911. See the <a href=\"https://www.elon.edu/u/health-promotion/substance-education/collegiate-recovery/\" target=\"_blank\" rel=\"noopener\">Collegiate Recovery webpage</a> or email <a href=\"mailto:phoenixfree@elon.edu\">phoenixfree@elon.edu</a>." },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
// ================================================================
const FEATURES = {
  syllabus:    true,
  checklist:   true,
};

// ================================================================
//  PAGES
//  Stable GitHub Pages URLs — update only if files move or rename
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  canvasHome:  `${COURSE.canvasBase}/courses/${COURSE.canvasId}`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  checklist:   `${COURSE.baseUrl}/checklist.html`,
};

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:     COURSE,
  instructor: INSTRUCTOR,
  exams:      EXAMS,
  schedule:   SCHEDULE,
  textbook:   TEXTBOOK,
  grading:    GRADING,
  policies:   POLICIES,
  features:   FEATURES,
  pages:      PAGES,
};
