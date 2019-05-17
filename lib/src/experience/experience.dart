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
    Achievement(
      'IOI 2019 Participant',
      'Aug 2019',
      'South Africa',
      '''
      <p>Member of the South African team at the International Olympiad in Informatics 2019</p>
      ''',
      5),
    Achievement(
      'Google Code-In 2018 Grand-prize Winner',
      'Dec 2018',
      'Apertium',
      '''
      <p>One of 54 Grand-prize winners in the Google Code-In - An annual international
      competition where high-schoolers get to contribute to various open-source
      organizations by completing tasks.</p>
      <p>My organization was Apertium - a rule-based machine translation platform
      that specialises in under-documented languages.</p>
      ''',
      5),
    Achievement(
      'USACO Platinum Division Competitor',
      'Mar 2019 - Present',
      'USACO',
      '''
      <p>Platinum division competitor in the USA Computing Olympiad.</p>
      ''',
      4),
  ];
  final List<Achievement> maths_achievements = [
    Achievement(
      'IMO 2019 Participant',
      'July 2019',
      'South Africa',
      '''
      <p>Member of the South African team at the International Mathematics Olympiad 2019</p>
      ''',
      5),
    Achievement(
      'PAMO 2019 Silver Medalist',
      'April 2019',
      'South Africa',
      '''
      Stuff about PAMO
      ''',
      4),
    Achievement(
      'SAMO 2017 Junior Winner',
      'Sept 2017',
      'South Africa',
      '''
      <p>South African Maths Olympiad 2017 Junior Section Winner</p>
      ''',
      4),
    Achievement(
      'SAMO 2016 Junior Runner-up',
      'Sept 2016',
      'South Africa',
      '''
      <p>South African Maths Olympiad 2016 Junior Section Runner-up</p>
      ''',
      4),
  ];
  final List<Achievement> music_achievements = [
    Achievement(
      'Atterbury National Piano Competition 2017 U16 Semifinalist',
      'Sept 2017',
      'Atterbury National Piano Competition',
      '''
      Atterbury stuff
      ''',
      3),
    Achievement(
      'ABRSM Piano Grade 8 with Distinction',
      'June 2018',
      'The Associated Board of the Royal Schools of Music',
      '''
      <p>Grade 8 level in Piano - the highest level before the Diploma, Licentiate, and Fellowship.</p>
      ''',
      4),
    Achievement(
      'ABRSM Flute Grade 8 with Distinction',
      'Oct 2018',
      'The Associated Board of the Royal Schools of Music',
      '''
      <p>Grade 8 level in Flute - the highest level before the Diploma, Licentiate, and Fellowship.</p>
      ''',
      4),
    Achievement(
      'Page-turned for a professional pianist once',
      'Sept 2018',
      'Linder Auditorium',
      '''
      <p>I page-turned for Luis Magalhães when he was playing a duet
      with his wife.</p>
      <p>It was a great experience. Fortunately I didn't mess up any turns</p>
      <p>(They played Liszt's Piano sonata in B minor and Bach's Goldberg Variations)</p>
      ''',
      4),
  ];
  final List<Achievement> misc_achievements = [
    Achievement(
      'Caught Pigeons with my Bare Hands',
      'Jan 2018 - Present',
      'At Home',
      '''
      <p>I have caught a few pigeons with my bare hands before.
      This is a truly remarkable skill, which unfortunately is often overlooked
      by recruiters, which is why I am proud to list it here.</p>
      <p>(Don't worry - I released them immediately afterwards.
      No pigeons were harmed in the making of this website.)</p>
      ''',
      1),
  ];
}