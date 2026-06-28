const JSP3_COLOR = "#f28a15";

const JSP3_DATES_BLACKLIST = [];

const JSP3_DATES = LESSONS_DATES.filter(
  (date) => !JSP3_DATES_BLACKLIST.includes(date),
);

const JSP3_LESSONS = [
  ["INC-A1", "M"],
  ["INC-A2", "SC-A1", "M"],
  ["INC-A3", "SC-B1", "M"],
  ["INC-B1", "INC-C1", "M"],
  ["INC-B2", "INC-C2", "M"],
  ["INC-C3", "INC-C4", "M"],
  ["PPBE-A1"],
  ["INC-A1", "INC-C4", "M"],
  ["INC-A2", "SC-A1", "M"],
  ["INC-A3", "INC-B1", "SC-B1", "M"],
  ["INC-C1", "INC-C2", "INC-C3", "M"],
  ["INC-A2", "INC-B1", "INC-B2", "INC-C3", "M"],
];

const JSP3_LESSON_COUNTS = JSP3_DATES.reduce(
  (acc, date, index) => {
    const lessons = JSP3_LESSONS[index] || [];

    lessons.forEach((lesson) => {
      if (lesson != "M")
        acc.runningCounts[lesson] = (acc.runningCounts[lesson] || 0) + 1;
    });

    acc.byDate[date] = { ...acc.runningCounts };
    return acc;
  },
  { byDate: {}, runningCounts: {} },
).byDate;

const JSP3_EVENTS = [
  ...JSP3_DATES.map((date, index) => {
    const content = JSP3_LESSONS[index] || [];
    const lessonCounts = JSP3_LESSON_COUNTS[date] || {};
    return {
      title: `JSP 3 - cours ${index + 1}`,
      start: `${date}T08:00:00`,
      color: JSP3_COLOR,
      extendedProps: {
        content: content.map((lesson) => JSP3_CONTENT[lesson]),
        lessonCounts,
      },
    };
  }),
  ...["2026-09-12", "2026-09-19", "2026-09-26", "2026-10-03", "2026-10-10"].map(
    (date) => {
      return {
        title: "🩺 JSP3 SAP - M1",
        start: `${date}T08:00:00`,
        end: `${date}T08:00:00`,

        color: JSP3_COLOR,
        extendedProps: {
          location: "CS Belfort Nord",
        },
      };
    },
  ),
  {
    title: "🔥 JSP3 INC",
    start: "2026-10-26T08:00:00",
    end: "2026-10-31T17:00:00",

    color: JSP3_COLOR,
    extendedProps: {
      location: "CS Delle",
    },
  },
];
