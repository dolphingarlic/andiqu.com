          import "package:test/bootstrap/browser.dart";

          import "app_test.dart" as test;

          void main() {
            internalBootstrapBrowserTest(() => test.main);
          }
        