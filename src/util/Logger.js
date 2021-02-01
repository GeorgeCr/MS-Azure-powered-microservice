const { createLogger, format, transports, addColors } = require("winston");

const { combine, timestamp, printf, colorize, splat } = format;

const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "blue",
  },
};

const formatter = printf(
  ({ level, message, label, timestamp }) => {
    const newLabel = label ? `[${label}]` : "";
    return `${timestamp} ${newLabel} ${level}: ${message}`;
  }
);

addColors(logLevels.colors);

const logger = createLogger({
  levels: logLevels.levels,
  format: combine(colorize(), splat(), timestamp(), formatter),
  transports: [new transports.Console()],
});

module.exports = logger;