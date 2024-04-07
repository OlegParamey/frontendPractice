function getSecondsToday(){
    let now = new Date();
    let date_values = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round(( (now - date_values) / 1000 ));
}
/* alternative way:
function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}*/

alert(getSecondsToday());