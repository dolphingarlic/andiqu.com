import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'experience-component',
  directives: [
    MaterialSliderComponent,
  ],
  templateUrl: 'experience.html',
  styleUrls: ['experience.css'],
)
class ExperienceComponent {
  int value = 2;
  final List<String> details = [
    'Bare minimum',
    'Less detailed',
    'Default',
    'More detailed',
    'Very detailed',
  ];
  String get current_detail => details[value];
}