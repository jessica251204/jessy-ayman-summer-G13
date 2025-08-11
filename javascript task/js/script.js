var users = [];

function addUser() {
    var id = prompt("Enter user ID:");
    var name = prompt("Enter username:");
    var balance = prompt("Enter balance:");
    
    // Store as object
    users.push({ id: id, name: name, balance: balance });
}

function editUserBalanceById() {
    var id = prompt("Enter the user ID whose balance you want to update:");
    var newBalance = prompt("Enter the new balance:");
    var user = users.find(function(u) {
        return u.id === id;
    });
    if (user) {
        user.balance = newBalance;
    } else {
        console.log("User not found!");
    }
}

function deleteUserById() {
    var id = prompt("Enter the user ID you want to delete:");
    var index = users.findIndex(function(u) {
        return u.id === id;
    });
    if (index !== -1) {
        users.splice(index, 1);
    } else {
        console.log("User not found!");
    }
}

// Ask how many users to add, make sure it’s a valid number
var count = parseInt(prompt("How many users do you want to input?"), 10);

if (!isNaN(count) && count > 0) {
    for (var i = 0; i < count; i++) {
        addUser();
    }

    editUserBalanceById();
    deleteUserById();
} else {
    console.log("Invalid number of users. Exiting program.");
}

console.log(users);
