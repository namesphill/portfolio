export const open = width => [
  {
    top: width * 0.2
  }
];

export const hidden = width => [
  {
    left: width * -1.5
  }
];

export const code = width => [
  {
    position: "absolute",
    width: width * 0.9,
    top: width * 0.2,
    left: width * 0.05,
    right: width * 0.05
  },
  {
    position: "absolute",
    width: 540,
    top: 120,
    left: width - 540,
    right: 0
  },
  {
    position: "absolute",
    width: 540,
    top: 0,
    left: 200,
    right: width - 740
  },
  {
    position: "absolute",
    width: 540,
    top: -20,
    left: 300,
    rigth: width - 840
  }
];

export const write = width => [
  {
    position: "absolute",
    width: width * 0.9,
    top: width,
    left: width * 0.05,
    right: width * 0.05
  },
  {
    position: "absolute",
    width: 540,
    top: 550,
    left: 0,
    right: width - 540
  },
  {
    position: "absolute",
    width: 540,
    top: 350,
    left: 0,
    right: width - 540
  },
  {
    position: "absolute",
    width: 540,
    top: 300,
    left: 0,
    right: width - 540
  }
];

export const am = width => [
  {
    position: "absolute",
    width: width * 0.9,
    top: width * 1.8,
    left: width * 0.05,
    right: width * 0.05
  },
  {
    position: "absolute",
    width: 540,
    top: 940,
    left: width - 540,
    right: 0
  },
  {
    position: "absolute",
    width: 540,
    top: 750,
    left: 200,
    right: width - 540
  },
  {
    position: "absolute",
    width: 540,
    top: 500,
    left: width - 540,
    right: 0
  },
  {
    position: "absolute",
    width: 540,
    top: 500,
    left: width - 540,
    right: 0
  },
  {
    position: "absolute",
    width: 540,
    top: 500,
    left: 400,
    right: width - 140
  }
];
