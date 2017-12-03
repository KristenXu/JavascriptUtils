/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
    this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {

    var deps = /^[^(]+\(([^)]+)/.exec(func.toString());

    //  构建参数绑定数组
    deps = deps ? deps[1]
            .split(/\s?,\s?/)
            .map(function (dep) {
                return this.dependency[dep];
            }.bind(this)) : [];

    // 通过apply将依赖参数传入函数
    return function () {
        return func.apply(this, deps);
    };

}