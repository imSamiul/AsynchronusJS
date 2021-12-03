let meeting = false;

const checkMeeting = new Promise((resolve, reject) => {
  if (!meeting) {
    var newMeeting = {
      name: "Web Development",
      media: "Google meet",
      time: "9.00 PM",
    };
    resolve(newMeeting);
  } else {
    throw new Error("There is no meeting");
  }
});
const addToCalender = (newMeeting) => {
  const calender = `${newMeeting.name} has been schedule on ${newMeeting.time}`;
  return calender;
};
checkMeeting
  .then(addToCalender)

  .then((msg) => {
    console.log(JSON.stringify(msg));
  })
  .catch((err) => {
    console.error(err.message);
  });
