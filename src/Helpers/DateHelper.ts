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
}
