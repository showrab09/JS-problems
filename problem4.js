 //Problem 4
/* Finiding the 5 length wala first bondhur name in the list */

function perfectFriend(friendName) {
    for (i = 0; i < friendName.length ; i++) {
        if (friendName[i].length == 5) {
            return friendName[i];
        }
    }
     /* If there is no string of 5 letters then it will show the error message */
     return "My favourite Bondhu is not in the array.Please Insert 5 length wala bondhur naam in the array.";
}
var favouriteBondhu = perfectFriend(['mustafiz', 'rakibul', 'sakibul', 'mashrafi', 'tamim', 'mehedi', 'sakib']);

console.log(favouriteBondhu);