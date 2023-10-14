const days: string[] = [
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

export class DateHelper {
  static getDay(day: number) {
    return days[day];
  }
  static getQuarterHourTimes() {
    var quarterHours = ["00", "15", "30", "45"];
    var times = [];
    for (var i = 0; i < 24; i++) {
      for (var j = 0; j < 4; j++) {
        times.push(i + ":" + quarterHours[j]);
      }
    }
    return times;
  }
}
