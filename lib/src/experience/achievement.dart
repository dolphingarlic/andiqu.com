class Achievement {
  final String title, date, content, organization;
  final int importance;

  Achievement(this.title, this.date, this.organization, this.content, this.importance);

  @override
  String toString() => '$title';
}