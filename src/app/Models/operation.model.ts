export enum OperationStatus {
  Done = 'Done',
  Decline = 'Decline',
  Progress = 'Progress'
}

export interface OperationDto {
  id: number,
  botId: number;
  ticker: string;
  createdDate: Date;
  price: number;
  operationType: string;
  status: OperationStatus;
  isSuccess: boolean;
}
