export type TerminalInfo = {
  terminalId: number;
  terminalName: string;
  terminalDeadline: string; // ISO 8601 형식의 날짜 문자열
  terminalRemainCount: number;
};

export type ExpressData = {
  editTime: string;
  terminalInfo: TerminalInfo[];
};
