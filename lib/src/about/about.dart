import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular/security.dart';

@Component(
  selector: 'about-component',
  directives: [
    MaterialToggleComponent,
    coreDirectives,
  ],
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
)
class AboutComponent {
  final DomSanitizationService sanitizer;
  SafeHtml fun_about, boring_about;

  AboutComponent(this.sanitizer) {
    fun_about = this.sanitizer.bypassSecurityTrustHtml('''
    <p>I am a dynamic figure, often seen creating fake
        emails to get more free trials and preaching
        Communism to Icelandic sheep herders. Sometimes,
        if you're lucky, you'll even see me erecting massive 500
        story skyscrapers in my backyard. When I am bored, I charm
        cats with my godlike yodelling skills and my
        transcendental clarinet squeaks.</p>
  
    <p>I am motivated to take risks. Sometimes, because I like
        to live dangerously, I play chess with one less pawn
        and do geometry in pen. Sometimes I even
        play on the Wii without the safety strap! I know
        - I'm a real daredevil. Sometimes I'm even amazed myself
        that I've managed to survive this long in the first
        place, what with all these totally dangerous and not
        at all normal feats! But nothing quite beats the
        adrenaline rush that I get from participating in a class
        discussion.</p>
  
    <div style="text-align: center;">
        <p>Who am I? Of course, I am...</p>
        The One<br>
        The Only<br>
        Andi Qu
    </div>
    ''');

    boring_about = this.sanitizer.bypassSecurityTrustHtml('''
    <p>Salutations, everyone. Andi here.</p>
    <p>
        I am a high school student from St John's College, Johannesburg. I started programming in grade 9, and since
        then it has <span style="text-decoration: line-through;">taken over my life</span> become one of my passions
        and I have participated in quite a few contests since then.
    </p>
    <p>
        My interests include playing the piano and clarinet, competitive programming, and olympiad maths.
        Sometimes, I also (try to) contribute to FOSS initiatives like
        <a href="https://www.apertium.org">Apertium</a>,
        but unfortunately this does not happen very often.
    </p>
    <p>
        "But Andi", I hear you cry, "where are all the cool things you've coded up? Surely someone as <b>cool</b>
        and <b>awesome</b> as you would have at least 2 world-changing projects?"
    </p>
    <p>
        To that, I say: Yes, it is quite true - and unfortunate - that I have created a surprisingly small amount
        of actually-useful software. This may or may not be due to my focus on competitive programming over creating
        actually-useful software. But fear not! I have created/contributed towards some fun stuff like
        <a href="https://dolphingarlic.github.io/Apertium-Global-PairViewer">the Apertium Global PairViewer</a> and
        <a href="https://dolphingarlic.github.io/slinky_snake">whatever this is</a>.
    </p>
    <p>
        Unfortunately (or fortunately, depending on how much you despise my writing), I do not have a blog (yet),
        so you'll have to trust that this website accurately conveys who I am.
    </p>
    ''');
  }

  bool fun = false;
  SafeHtml get aboutText => fun ? fun_about : boring_about;
}