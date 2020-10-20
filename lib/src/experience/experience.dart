import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

import 'achievement.dart';
import 'cs.dart';
import 'maths.dart';
import 'music.dart';
import 'misc.dart';

@Component(
  selector: 'experience-component',
  directives: [
    MaterialSliderComponent,
    coreDirectives,
  ],
  templateUrl: 'experience.html',
  styleUrls: ['experience.css'],
)
class ExperienceComponent {
  int value = 0;
  final List<String> details = [
    'Most important (Default)',
    'Important',
    'Detailed',
    'More detailed',
    'Unnecessarily detailed',
  ];
  String get current_detail => details[value];

  final List<Achievement> cs_achievements = cs;
  final List<Achievement> maths_achievements = maths;
  final List<Achievement> music_achievements = music;
  final List<Achievement> misc_achievements = misc;
}
