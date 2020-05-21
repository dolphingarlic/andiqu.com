import 'package:angular/angular.dart';

import 'project_card.dart';
import 'my_projects.dart';

@Component(
  selector: 'projects-component',
  templateUrl: 'projects.html',
  directives: [
    coreDirectives,
  ],
  styleUrls: ['projects.css'],
)
class ProjectsComponent {
  final List<Project> projects = my_projects;
}
