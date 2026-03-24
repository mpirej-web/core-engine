// types.ts
import { Status, StatusMap } from './status';

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 3,
  SILENT = 4,
}

export interface ILogEntry {
  timestamp: number;
  level: LogLevel;
  message: string;
  additionalInfo: any;
}

export interface IConfig {
  logLevel: LogLevel;
  statusMap?: StatusMap;
}

export interface IStatus {
  status: Status;
  timestamp: number;
  message: string;
  additionalInfo: any;
}

export type StatusMap = {
  [key in Status]: {
    message: string;
    additionalInfo: any;
  };
};