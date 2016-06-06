'use strict';

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES
    return submittedUsers.every(user => goodUsers.some(item => item === user));
  };
}

module.exports = checkUsersValid
