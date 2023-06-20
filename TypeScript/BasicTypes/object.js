var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["AUTHOR"] = 1] = "AUTHOR";
    Roles[Roles["RANK1"] = 2] = "RANK1";
    Roles[Roles["RANK0"] = 3] = "RANK0";
})(Roles || (Roles = {}));
var person = {
    name: 'Bartek',
    role: Math.floor(Math.random() * 4)
};
if (person.role === Roles.ADMIN) {
    console.log('Jesteś Adminem');
}
else if (person.role === Roles.AUTHOR) {
    console.log('Jesteś Autorem');
}
else if (person.role === Roles.RANK1) {
    console.log('Jesteś Rank1');
}
else if (person.role === Roles.RANK0) {
    console.log('Jesteś Rank0, noobie');
}
