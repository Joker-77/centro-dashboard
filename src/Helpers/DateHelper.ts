const days: string[] = [
  "السبت",
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
];
export class DateHelper {
  static getDay(day: number) {
    return days[(day + 1) % 7];
  }
}
