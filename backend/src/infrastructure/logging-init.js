import winston from "winston";
import 'winston-daily-rotate-file';
const { combine, timestamp,json} = winston.format;

const dailyRotationTransport = new winston.transports.DailyRotateFile({
    filename: 'log/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),    
        json()),
    transports: [
        dailyRotationTransport
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export default logger;
