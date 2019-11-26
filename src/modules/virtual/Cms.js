const VirtualModule = require('webpack-virtual-modules');
// var chokidar = require('chokidar');
// var path = require('path');

module.exports = class VirtualLang extends VirtualModule {
  constructor() {
    super();
  }

  apply (compiler) {
    super.apply(compiler);

    // console.log(compiler.options.plugins);
    compiler.hooks.beforeCompile.tapAsync('PageContentPlugin', (params, callback) => {
      const jsonString = '[{"path": "123", "components": [{"component": "a"}, {"component": "a-lazy"}]}, {"path": "abc", "components": [{"component": "b"}, {"component": "b-lazy"}]}]';
      const json = JSON.parse(jsonString);
      json.forEach((item) => {
        const itemString = JSON.stringify(item);
        let counter = 0;
        const result = itemString.replace(/(?<="component":\s*)"([\w-]*)"/gm, function (match, group) {
          counter++;
          if (counter > 1) {
            return `() => import(/* webpackMode: "lazy" */"@/sample/${group}")`;
          } else {
            return `() => import(/* webpackMode: "eager" */"@/sample/${group}")`;
          }
        });
        this.writeModule(`src/test/${item.path}`, `module.exports = ${result};`);
      });

      // let counter = 0;
      // console.log(test.replace(/(?<="component":\s)"([\w]+)"/gm, function (match, group) {
      //   counter++;
      //   if (counter > 1) {
      //     return `import(/* webpackMode: "lazy" */"@/components/organisms/${group}")`;
      //   } else {
      //     return `import(/* webpackMode: "eager" */"@/components/organisms/${group}")`;
      //   }

      // }));//'import("@/components/organisms/$1")'));
      // this.writeModule('src/test/123/hello', `module.exports = function() { alert("huhu" + JSON.stringify(module)); return import(/* webpackMode: "eager" */"${path}")}`);
      callback();
    });

    // compiler.resolverFactory.hooks.resolver.for('normal').tap('AHA', (resolver, options) => {
    //   // console.log('BOOM', resolver.hooks);
    //   // console.log(resolver.getHook('@/test/123'));
    //   resolver.hooks.resolveStep.tap('MyPlugin', (resource, error) => {
    //     console.log(error);
    //     // console.log('resolver.hooks.noResolve.for(normal)', resource, error);
    //     var test = '@/utils/test-import';
    //     this.writeModule('src/test/123', `module.exports = function() { alert("huhu"); return import("${test}")}`);
    //     // console.log(compiler.);
    //   });
    // });

    compiler.hooks.normalModuleFactory.tap('VirtualModulesPlugin', nmf => {
      nmf.hooks.beforeResolve.tapAsync('VirtualModulesPlugin', (resource, callback) => {

        // console.log('JAJA', resource.request);
        if (/\/test/g.test(resource.request)) {
          // console.log(resource);
          // console.log(resource);
          // const file = 'test-import';
          // const path = `@/utils/${file}`;
          // this.writeModule(resource.request.replace('@', 'src'), `module.exports = function() { alert("huhu" + JSON.stringify(module)); return import(/* webpackMode: "eager" */"${path}")}`);
        }
        callback();
      });
    });

    compiler.hooks.contextModuleFactory.tap('VirtualModulesPlugin', nmf => {
      nmf.hooks.beforeResolve.tapAsync('VirtualModulesPlugin', (resource, callback) => {
        // console.log('JAJA', resource.request);
        if (/\/test\/123$/g.test(resource.request)) {
          // console.log(resource);
          // const file = 'test-import';
          // const path = `@/utils/${file}`;
          // this.writeModule(resource.request.replace('@', 'src'), `module.exports = function() { alert("huhu" + JSON.stringify(module)); return import(/* webpackMode: "eager" */"${path}")}`);
        }
        callback();
      });
    });

    // compiler.hooks.compilation.tap('MyPlugin', (compilation, c) => {
    //   console.log(c);
    //   var test = '@/utils/test-import';
    //   this.writeModule('src/test/123', `module.exports = function() { alert("huhu" + JSON.stringify(config)); return import("${test}")}`);
    // });
  }
};
