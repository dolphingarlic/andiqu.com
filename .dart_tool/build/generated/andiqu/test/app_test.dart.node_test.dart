          import "package:test/bootstrap/node.dart";

          import "app_test.dart" as test;

          void main() {
            internalBootstrapNodeTest(() => test.main);
          }
        