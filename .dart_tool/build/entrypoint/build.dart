import 'package:build_runner/build_runner.dart' as _i1;
import 'package:source_gen/builder.dart' as _i2;
import 'package:sass_builder/sass_builder.dart' as _i3;
import 'package:build/build.dart' as _i4;
import 'package:angular_components/builder.dart' as _i5;
import 'package:angular/builder.dart' as _i6;
import 'package:build_test/builder.dart' as _i7;
import 'package:build_config/build_config.dart' as _i8;
import 'package:build_modules/builders.dart' as _i9;
import 'package:build_web_compilers/builders.dart' as _i10;
import 'dart:isolate' as _i11;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('source_gen|combining_builder', [_i2.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen|part_cleanup']),
  _i1.apply('sass_builder|sass_builder', [_i3.sassBuilder],
      _i1.toDependentsOf('sass_builder'),
      hideOutput: true,
      defaultReleaseOptions: _i4.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: ['sass_builder|sass_source_cleanup']),
  _i1.apply('angular_components|scss_builder', [_i5.scssBuilder],
      _i1.toNoneByDefault(),
      hideOutput: true, appliesBuilders: ['sass_builder|sass_source_cleanup']),
  _i1.apply(
      'angular|angular',
      [_i6.templatePlaceholder, _i6.templateCompiler, _i6.stylesheetCompiler],
      _i1.toDependentsOf('angular'),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'angular|placeholder_cleanup',
        'angular|component_source_cleanup'
      ]),
  _i1.apply(
      'build_test|test_bootstrap',
      [_i7.debugIndexBuilder, _i7.debugTestBuilder, _i7.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i8.InputSet(include: ['test/**'])),
  _i1.apply('build_modules|module_library', [_i9.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|vm',
      [
        _i9.metaModuleBuilderFactoryForPlatform('vm'),
        _i9.metaModuleCleanBuilderFactoryForPlatform('vm'),
        _i9.moduleBuilderFactoryForPlatform('vm')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|dart2js',
      [
        _i9.metaModuleBuilderFactoryForPlatform('dart2js'),
        _i9.metaModuleCleanBuilderFactoryForPlatform('dart2js'),
        _i9.moduleBuilderFactoryForPlatform('dart2js')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|dartdevc',
      [
        _i9.metaModuleBuilderFactoryForPlatform('dartdevc'),
        _i9.metaModuleCleanBuilderFactoryForPlatform('dartdevc'),
        _i9.moduleBuilderFactoryForPlatform('dartdevc'),
        _i9.unlinkedSummaryBuilderForPlatform('dartdevc'),
        _i9.linkedSummaryBuilderForPlatform('dartdevc')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i10.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers|dart_source_cleanup',
        'build_modules|dartdevc',
        'build_modules|dart2js'
      ]),
  _i1.apply('build_web_compilers|entrypoint', [_i10.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i8.InputSet(include: [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: _i4.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: _i4.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('source_gen|part_cleanup', _i2.partCleanup,
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess('angular|placeholder_cleanup', _i6.placeholderCleanup,
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess(
      'angular|component_source_cleanup', _i6.componentSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i8.InputSet(include: ['lib/**'])),
  _i1.applyPostProcess(
      'sass_builder|sass_source_cleanup', _i3.sassSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess('build_modules|module_cleanup', _i9.moduleCleanup,
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers|dart_source_cleanup', _i10.dartSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i10.dart2JsArchiveExtractor,
      defaultReleaseOptions: _i4.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i8.InputSet())
];
main(List<String> args, [_i11.SendPort sendPort]) async {
  var result = await _i1.run(args, _builders);
  sendPort?.send(result);
}
