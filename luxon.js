

var DateTime = luxon.DateTime; //--> Luxon's date object
var localTime=DateTime.local(); // --> To get the current time
console.log(localTime.toString()) // --> Returns String ->2020-10-21T03:27:22.247+05:30

var dt= luxon.DateTime().local()
dt.toLocaleString()      //=> '9/14/2017'
dt.toLocaleString(DateTime.DATETIME_MED) //=> 'September 14, 3:21 AM'