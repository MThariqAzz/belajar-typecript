import winston from 'winston';
import 'winston-daily-rotate-file';

const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'error',
  handleExceptions: true,
});

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.json(),
  transports: [transport],
  exitOnError: false,
  silent: false,
  exceptionHandlers: [transport],
  rejectionHandlers: [transport],
});

export default logger;
