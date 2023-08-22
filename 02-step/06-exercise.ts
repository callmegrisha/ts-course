enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

interface Payment {
  sum: number;
  from: number;
  to: number;
}

interface DataSuccess extends Payment {
  databaseId: number;
}

interface DataError {
  errorMessage: string;
  errorCode: number;
}

interface SuccessResponse {
  status: PaymentStatus.SUCCESS;
  data: DataSuccess;
}

interface FailedResponse {
  status: PaymentStatus.FAILED;
  data: DataError;
}

export {};