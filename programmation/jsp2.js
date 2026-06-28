const JSP2_COLOR = "#eed914";

const JSP2_DATES_BLACKLIST = [];

const JSP2_DATES = LESSONS_DATES.filter(
  (date) => !JSP2_DATES_BLACKLIST.includes(date),
);

const JSP2_LESSONS = [
  ["INC-A1", "SC-A1"],
  ["INC-B1", "SC-B1"],
  ["INC-B2", "SC-B2"],
  ["INC-C1", "INC-C2"],
  ["INC-C4", "INC-C5"],
  ["INC-C1", "INC-C2", "INC-C3"],
  ["INC-C6"],
  ["INC-B1", "INC-C3", "SC-B1"],
  ["PPBE-A1", "PPBE-A2"],
  ["INC-B2", "SC-B2"],
  ["INC-A1", "INC-C4", "SC-A1"],
  ["PPBE-A1", "PPBE-A2"],
  ["INC-C5", "INC-C6"],
  ["INC-A1", "INC-B1", "INC-B2"],
];

const JSP2_LESSON_COUNTS = JSP2_DATES.reduce(
  (acc, date, index) => {
    const lessons = JSP2_LESSONS[index] || [];

    lessons.forEach((lesson) => {
      if (lesson != "M")
        acc.runningCounts[lesson] = (acc.runningCounts[lesson] || 0) + 1;
    });

    acc.byDate[date] = { ...acc.runningCounts };
    return acc;
  },
  { byDate: {}, runningCounts: {} },
).byDate;

const JSP2_EVENTS = JSP2_DATES.map((date, index) => {
  const content = JSP2_LESSONS[index] || [];
  const lessonCounts = JSP2_LESSON_COUNTS[date] || {};
  return {
    title: `JSP 2 - cours ${index + 1}`,
    start: `${date}T08:00:00`,
    color: JSP2_COLOR,
    borderColor: "red",
    extendedProps: {
      content: content.map((lesson) => JSP2_CONTENT[lesson]),
      lessonCounts,
    },
  };
});
