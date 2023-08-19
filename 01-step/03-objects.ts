const user = {
    firstname: 'Григорий',
    surname: 'Петров',
    city: 'Москва',
    age: 25,
    skills: {
        dev: true,
        devops: false,
    }
};

export function getFullName(userEntity: { firstname: string, surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

console.log(getFullName(user));