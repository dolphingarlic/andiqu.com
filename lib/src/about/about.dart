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
    <p>
        I am a <b>dynamic figure</b>, often seen <b>creating fake
        emails</b> to get more free trials and <b>solving imaginary problems</b>
        crafted by <b>Polish mathematicians</b>. When I am bored, I charm
        cats with my transcendental clarinet squeaks.
    </p>
  
    <p>
        I am <b>motivated to take risks</b>. Sometimes, because I like
        to live dangerously, I play chess with <b>one less pawn</b>
        and do <b>geometry in pen</b>. Sometimes I even
        play the Wii without the safety strap! I know
        - I'm a real daredevil. Sometimes I'm even amazed myself
        that I've managed to survive this long in the first
        place, what with all these <b>totally dangerous</b> and not-at-all-normal
        feats! But nothing quite beats the
        adrenaline rush I get from <b>submitting code without compiling it locally</b>.
    </p>

    <p>
        What many may find perplexing is St John's College's (frustrating) <b>inability to
        spell my 4-letter name</b>. However, this is simply one of many testaments to the fact
        that I simply <b>transcend the English language</b>. This is an elusive position
        shared only by <b>literally every other language</b> (except Javascript).
    </p>
  
    <div style="text-align: center;">
        <p>Who am I? Of course, I am...</p>
        <b>
          The One<br>
          The Only<br>
          <h2>Andi Qu<h2>
        </b>
    </div>
    ''');

    boring_about = this.sanitizer.bypassSecurityTrustHtml('''
    <p>Hi, everyone! Andi here</p>
    <p>
        I am a matric student at St John's College, Johannesburg. I started programming in grade 9, and since
        then it has become one of my greatest passions.
    </p>
    <p>
        My interests include playing the piano and clarinet, competitive programming, and maths.
        Sometimes, I also contribute to FOSS initiatives like
        <a style="color: #409de6 !important;text-decoration: none;" href="https://www.apertium.org">Apertium</a>.
        I also enjoy participating in and mentoring for open-source competitions such as Hacktoberfest, the Google Code-In, and the Google Summer of Code.
    </p>
    <p>
        Possibly my favourite hobby is problem-solving - I spend a lot of my time solving algorithmic
        problems from various Olympiads such as the Baltic Olympiad in Informatics and the International
        Olympiad in Informatics. You can find all my code for these problems
        <a style="color: #409de6 !important;text-decoration: none;" href="https://github.com/dolphingarlic/CompetitiveProgramming">in my GitHub repo</a>.
    </p>
    <p>
        I also really enjoy making fun and quirky (but also kinda useless) websites. Check out
        <a style="color: #409de6 !important;text-decoration: none;" href="https://st0nks.ml/">St0nks.ml</a> and
        <a style="color: #409de6 !important;text-decoration: none;" href="https://bits-and-bytes.me/pickup-verses/">Pickup Verses</a>
        for some of my recent work. Feel free to suggest ideas to me - the crazier and more fun the idea,
        the more likely it'll be made! (But no, I won't hack your washing machine for you.)
    </p>
    <p>
        I now have a (semi-functional) blog!
        <a style="color: #409de6 !important;text-decoration: none;" href="https://bits-and-bytes.me/">Check it out here</a>!
    </p>
    ''');
  }

  bool fun = false;
  SafeHtml get aboutText => fun ? fun_about : boring_about;
}
