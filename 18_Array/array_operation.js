let styles = ["Джаз","Блюз"];
alert(styles);

styles.push("Рок-н-ролл");
alert(styles);

styles[Math.floor(styles.length/2)]= "Классика";
alert(styles);

alert(styles.shift());
alert(styles);

styles.unshift("Рэп","Регги")
alert(styles);
