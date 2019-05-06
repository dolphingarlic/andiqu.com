import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

import 'achievement.dart';

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
  int value = 2;
  final List<String> details = [
    'Most important stuff',
    'More important stuff',
    'Default',
    'More detailed',
    'Unnecessarily detailed',
  ];
  String get current_detail => details[value];

  final List<Achievement> cs_achievements = [
    Achievement('IOI 2019 Participant', 'Aug 2019', 'South Africa', 'Stuff about IOI', 5),
    Achievement('Google Code-In 2018 Grand Prize Winner', 'Dec 2018', 'Apertium', 'Stuff about GCI', 5),
    Achievement('USACO Platinum Division Competitor ', 'Mar 2019 - Present', 'USACO', 'Stuff about USACO', 4),
  ];
  final List<Achievement> maths_achievements = [
    Achievement('IMO 2019 Participant', 'July 2019', 'South Africa', 'Stuff about IMO', 5),
    Achievement('PAMO 2019 Silver Medalist', 'April 2019', 'South Africa', 'Stuff about PAMO', 4),
    Achievement('SAMO 2017 Junior Winner', 'Sept 2017', 'South Africa', 'South African Maths Olympiad 2017 Junior Section Winner', 4),
  ];
  final List<Achievement> music_achievements = [
    Achievement('Atterbury National Piano Competition 2017 U16 Semifinalist', 'Sept 2017', 'Atterbury National Piano Competition', 'Atterbury stuff', 3),
    Achievement('ABRSM Piano Grade 8 with Distinction', 'June 2018', 'ABRSM', 'ABRSM', 4),
    Achievement('ABRSM Flute Grade 8 with Distinction', 'Oct 2018', 'ABRSM', 'ABRSM', 4),
  ];
  final List<Achievement> misc_achievements = [

  ];
}