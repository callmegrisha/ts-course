enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FAILED = 'f',
}

const result = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS,
};

if (result.statusCode === StatusCode.SUCCESS) console.log('Это успех')

export function action(status: StatusCode) {}
action(StatusCode.SUCCESS);

function compute() {
    return 3;
}

const enum Roles {
    ADMIN = 1,
    USER = 2,
}

const res = Roles.ADMIN;