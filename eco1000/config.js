// ================================================================
//  ECO 1000 — COURSE CONFIGURATION
//  Hosted at: econbs.github.io/courses/eco1000/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block       — semester, canvasId (canvasId changes every term)
//  2. INSTRUCTOR block   — email, office, officeHours each semester
//  3. SCHEDULE block     — week dates and topics each semester
//  4. GRADING block      — only if grading structure changes
//  All HTML pages pull from this file automatically — edit here, not there.
// ================================================================

// ================================================================
//  COURSE
// ================================================================
const COURSE = {
  code:        "ECO 1000",
  title:       "Principles of Economics",
  semester:    "Fall 2026",                        // UPDATE each semester
  format:      "in-person",
  credits:     3,                                   // UPDATE if not 3
  baseUrl:     "https://econbs.github.io/courses/eco1000",
  canvasBase:  "https://elon.instructure.com",
  canvasId:    "1499",                              // UPDATE each semester
};

// ================================================================
//  INSTRUCTOR
//  UPDATE: fill in your Elon contact details and office hours
// ================================================================
const INSTRUCTOR = {
  name:        "Brandon Sheridan",
  nameShort:   "Prof. Sheridan",
  email:       "",                                  // UPDATE: your @elon.edu address
  phone:       "",                                  // UPDATE (optional)
  office:      "",                                  // UPDATE
  officeHours: "",                                  // UPDATE, e.g. "Mon & Wed, 2:00-3:30 p.m."
  zoomUrl:     "",                                  // UPDATE (optional)
  zoomDisplay: "",
};

// ================================================================
//  SCHEDULE
//  UPDATE: dates and topics each semester.
//  One entry per week — add/remove weeks as your calendar requires.
// ================================================================
const SCHEDULE = {
  dates: {
    classesBegin: "",       // UPDATE, e.g. "August 25, 2026"
    classesEnd:   "",       // UPDATE
    examsBegin:   "",       // UPDATE
    examsEnd:     "",       // UPDATE
  },

  // weekStart drives the auto-highlight of the current week on checklist.html
  // Format: new Date(year, month (0=Jan), day)
  weeks: [
    { num: 1,  label: "Week 1",  weekStart: new Date(2026, 7, 25),  topic: "UPDATE — topic/reading", },
    { num: 2,  label: "Week 2",  weekStart: new Date(2026, 8, 1),   topic: "UPDATE — topic/reading", },
    { num: 3,  label: "Week 3",  weekStart: new Date(2026, 8, 8),   topic: "UPDATE — topic/reading", },
    { num: 4,  label: "Week 4",  weekStart: new Date(2026, 8, 15),  topic: "UPDATE — topic/reading", },
    { num: 5,  label: "Week 5",  weekStart: new Date(2026, 8, 22),  topic: "UPDATE — topic/reading", },
    { num: 6,  label: "Week 6",  weekStart: new Date(2026, 8, 29),  topic: "UPDATE — topic/reading", },
    { num: 7,  label: "Week 7",  weekStart: new Date(2026, 9, 6),   topic: "UPDATE — topic/reading", },
    { num: 8,  label: "Week 8",  weekStart: new Date(2026, 9, 13),  topic: "UPDATE — topic/reading", },
    { num: 9,  label: "Week 9",  weekStart: new Date(2026, 9, 20),  topic: "UPDATE — topic/reading", },
    { num: 10, label: "Week 10", weekStart: new Date(2026, 9, 27),  topic: "UPDATE — topic/reading", },
    { num: 11, label: "Week 11", weekStart: new Date(2026, 10, 3),  topic: "UPDATE — topic/reading", },
    { num: 12, label: "Week 12", weekStart: new Date(2026, 10, 10), topic: "UPDATE — topic/reading", },
    { num: 13, label: "Week 13", weekStart: new Date(2026, 10, 17), topic: "UPDATE — topic/reading", },
    { num: 14, label: "Week 14", weekStart: new Date(2026, 10, 24), topic: "UPDATE — topic/reading", },
    { num: 15, label: "Week 15", weekStart: new Date(2026, 11, 1),  topic: "UPDATE — topic/reading", },
  ],
};

// ================================================================
//  GRADING
//  UPDATE: weights and components to match your syllabus
// ================================================================
const GRADING = {
  components: [
    { id: "exams",   label: "Exams",         weight: 50, note: "UPDATE — describe" },
    { id: "hw",      label: "Homework",      weight: 25, note: "UPDATE — describe" },
    { id: "part",    label: "Participation", weight: 15, note: "UPDATE — describe" },
    { id: "final",   label: "Final Exam",    weight: 10, note: "UPDATE — describe" },
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
  schedule:   SCHEDULE,
  grading:    GRADING,
  features:   FEATURES,
  pages:      PAGES,
};
