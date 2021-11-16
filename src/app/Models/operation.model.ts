export enum OperationStatus {
  done = 'done',
  decline = 'decline',
  progress = 'progress'
}

export interface Operation {
  botId: number;
  ticker: string;
  createdDate: Date;
  price: number;
  operationType: string;
  status: OperationStatus;
  isSuccess: boolean;
}