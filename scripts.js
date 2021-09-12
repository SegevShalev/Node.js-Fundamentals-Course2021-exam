//input
const students = ["Eden", "Refael", "Yoni", "Nitzan", "Hadas"];
const attendees = [
  ["Eden","Eden","Refael","Yoni","Nitzan","Eden","Yoni","Hadas","Ortal",],
  ["Berry", "Nitzan", "Yoni", "Eden", "Hadas", "Ortal"],
  ["Maxim", "Ortal", "Yoni", "Refael", "Nitzan", "Alex"],
  ["Eden", "Andrew", "Yoni", "Nitzan", "Ortal", "Nitzan"],
];
const N = 3;

function handleDuplicates(attendees) {
  return attendees.filter((value, i) => attendees.indexOf(value) === i);
}

const topNStudentsAttendees = (students, attendees, N) => {
  let x, y, uniqueKeyValue;
  const uniqueArray = [];
  const answer = [];
  const attendeesTracker = new Map();

  for (x = 0; x < students.length; x++) {
    attendeesTracker.set(students[x], 0);
  }
  for (x = 0; x < attendees.length; x++) {
    uniqueArray.push(handleDuplicates(attendees[x]));
  }
  for (x = 0; x < uniqueArray.length; x++) {
    for (y = 0; y < uniqueArray[x].length; y++) {
      uniqueKeyValue = uniqueArray[x][y];
      if (students.includes(uniqueKeyValue)) {
        attendeesTracker.set(uniqueKeyValue, attendeesTracker.get(uniqueKeyValue) + 1);
      }
    }
  }

var attendeesTrackerToArray = []
attendeesTrackerToArray = [...attendeesTracker]
attendeesTrackerToArray.sort((a, b) => b[1] - a[1])
console.log(attendeesTrackerToArray)

for(x=0;x<N;x++){
answer.push(attendeesTrackerToArray[x][0])
}

  return answer
};

const answer = topNStudentsAttendees(students, attendees, N);
console.log(answer)
