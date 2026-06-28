const JSP1_COLOR = "#ffffff";

const JSP1_DATES_BLACKLIST = [];

const JSP1_DATES = LESSONS_DATES.filter(
  (date) => !JSP1_DATES_BLACKLIST.includes(date),
);

const JSP1_LESSONS = [
  ["SC-A1", "SC-C1"],
  ["INC-C3", "M"],
  ["INC-A1", "INC-A2", "SC-B1"],
  ["INC-B1", "SC-A2"],
  ["INC-B2", "SC-A3"],
  ["INC-C1", "M"],
  ["INC-C3", "SC-A5"],
  ["INC-A1", "SC-A2", "SC-A3"],
  ["INC-B1", "INC-C1", "SC-A1"],
  ["INC-C1", "INC-C2", "M"],
  ["INC-A2", "SC-A4", "M"],
  ["INC-B2", "INC-C2", "M"],
  ["INC-B1", "SC-C1", "M"],
  ["INC-A2", "INC-C3", "SC-A5", "M"],
  ["INC-B2", "SC-A4", "SC-B1", "M"],
  ["INC-C2", "SC-A1", "M"],
  ["SC-A1", "SC-C1"],
  ["INC-C3", "M"],
  ["INC-A1", "INC-A2", "SC-B1"],
  ["INC-B1", "SC-A2"],
  ["INC-B2", "SC-A3"],
  ["INC-C1", "M"],
  ["INC-C3", "SC-A5"],
  ["INC-A1", "SC-A2", "SC-A3"],
  ["INC-B1", "INC-C1", "SC-A1"],
  ["INC-C1", "INC-C2", "M"],
  ["INC-A2", "SC-A4", "M"],
  ["INC-B2", "INC-C2", "M"],
  ["INC-B1", "SC-C1", "M"],
  ["INC-A2", "INC-C3", "SC-A5", "M"],
  ["INC-B2", "SC-A4", "SC-B1", "M"],
  ["INC-C2", "SC-A1", "M"],
];

const JSP1_LESSON_COUNTS = JSP1_DATES.reduce(
  (acc, date, index) => {
    const lessons = JSP1_LESSONS[index] || [];

    lessons.forEach((lesson) => {
      if (lesson != "M")
        acc.runningCounts[lesson] = (acc.runningCounts[lesson] || 0) + 1;
    });

    acc.byDate[date] = { ...acc.runningCounts };
    return acc;
  },
  { byDate: {}, runningCounts: {} },
).byDate;

const JSP1_EVENTS = JSP1_DATES.map((date, index) => {
  const content = JSP1_LESSONS[index] || [];
  const lessonCounts = JSP1_LESSON_COUNTS[date] || {};
  return {
    title: `JSP 1 - cours ${index + 1}`,
    start: `${date}T08:00:00`,
    color: JSP1_COLOR,
    extendedProps: {
      content: content.map((lesson) => JSP1_CONTENT[lesson]),
      lessonCounts,
    },
  };
});
