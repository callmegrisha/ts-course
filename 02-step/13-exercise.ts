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

type Res = SuccessResponse | FailedResponse;

function isResponseSuccess(res: Res): res is SuccessResponse {
  return (res as SuccessResponse).status === PaymentStatus.SUCCESS;
}

function isResponseFailed(res: Res): res is FailedResponse {
  return (res as FailedResponse).status === PaymentStatus.FAILED;
}

function response(res: Res): number {
  if (isResponseSuccess(res)) {
    return res.data.databaseId;
  } else if (isResponseFailed(res)) {
    return res.data.errorCode;
  }

  throw new Error('Undefined response status');
}

export {};
