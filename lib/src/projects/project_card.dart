class Project {
  final String name, description, date, url, image_url;

  Project(this.name, this.description, this.date, this.url, this.image_url);

  @override
  String toString() => '$name';
}
