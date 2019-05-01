define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__browser__feature_detector__feature_detector = Object.create(_root);
  const $contains = dartx.contains;
  const $position = dartx.position;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  utils__browser__feature_detector__feature_detector.supportsHover = function(window) {
    return !((() => {
      let t = window.matchMedia("(hover: none)");
      let l = t == null ? null : t.matches;
      return l != null ? l : false;
    })() || window.navigator.userAgent[$contains]("Nexus 9"));
  };
  dart.defineLazy(utils__browser__feature_detector__feature_detector, {
    /*utils__browser__feature_detector__feature_detector.isTouchInterface*/get isTouchInterface() {
      return (() => {
        let l = html.window.matchMedia("(pointer: coarse)").matches;
        return l != null ? l : false;
      })() || dart.test(js.context.hasProperty("__acxForceTouchEnabled"));
    }
  });
  utils__browser__feature_detector__feature_detector.isHammerLoaded = function() {
    return js.context.hasProperty("Hammer");
  };
  dart.defineLazy(utils__browser__feature_detector__feature_detector, {
    /*utils__browser__feature_detector__feature_detector.supportsAnimationApi*/get supportsAnimationApi() {
      return dart.dtest(js_util.hasProperty(html.DivElement.new(), "animate")) && !dart.test(js.context.hasProperty("__acxDisableWebAnimationsApi"));
    },
    /*utils__browser__feature_detector__feature_detector.supportsIntersectionObserver*/get supportsIntersectionObserver() {
      return js.context.hasProperty("IntersectionObserver");
    },
    /*utils__browser__feature_detector__feature_detector.supportsResizeObserver*/get supportsResizeObserver() {
      return js.context.hasProperty("ResizeObserver");
    },
    /*utils__browser__feature_detector__feature_detector.supportsPositionSticky*/get supportsPositionSticky() {
      return dart.fn(() => {
        let el = html.DivElement.new();
        el.style.cssText = "position: sticky";
        return el.style[$position] === "sticky";
      }, VoidTobool())();
    },
    /*utils__browser__feature_detector__feature_detector.isFirefox*/get isFirefox() {
      return html.window.navigator.userAgent[$contains]("Firefox/");
    },
    /*utils__browser__feature_detector__feature_detector.isEdge*/get isEdge() {
      return html.window.navigator.userAgent[$contains]("Edge/");
    }
  });
  dart.trackLibraries("packages/angular_components/utils/browser/feature_detector/feature_detector.ddc", {
    "package:angular_components/utils/browser/feature_detector/feature_detector.dart": utils__browser__feature_detector__feature_detector
  }, '{"version":3,"sourceRoot":"","sources":["feature_detector.dart"],"names":[],"mappings":";;;;;;;;;;;;;8EAemB,MAAa;UAC5B;cAAG,MAAM,WAAW,CAAC;;6BAA6B;YAC9C,MAAM,UAAU,UAAU,WAAS,CAAC;EAAW;;MAG5C,mEAAgB;YACmC;gBAAzD,WAAM,WAAW,CAAC,4BAA4B;+BAAI;wBAC/C,AAAG,UAAO,YAAY,CAAC;;;;UAQN,AAAG,WAAO,YAAY,CAAC;EAAS;;MAG9C,uEAAoB;YACkB,YAA7C,AAAQ,mBAAW,CAAC,mBAAU,IAAI,0BAC7B,AAAG,UAAO,YAAY,CAAC;;MAGrB,+EAA4B;YACnC,AAAG,WAAO,YAAY,CAAC;;MAGhB,yEAAsB;YAAG,AAAG,WAAO,YAAY,CAAC;;MAGhD,yEAAsB;YAAG;AAClC,YAAI,KAAK,mBAAU;AACnB,UAAE,MAAM,QAAQ,GAAG;AACnB,cAAO,GAAE,MAAM,WAAS,KAAI;;;MAInB,4DAAS;YAAG,YAAM,UAAU,UAAU,WAAS,CAAC;;MAGhD,yDAAM;YAAG,YAAM,UAAU,UAAU,WAAS,CAAC","file":"feature_detector.ddc.js"}');
  // Exports:
  return {
    utils__browser__feature_detector__feature_detector: utils__browser__feature_detector__feature_detector
  };
});

//# sourceMappingURL=feature_detector.ddc.js.map
