function EventEngine(table) {
  // 这里要存放我们的自定义事件
  // 因为是一个表，所以我们使用Object类型
  this._events = {};

  // 得到函数及属性表中的内容
  for (var i in table) this[i] = table[i];
}

EventEngine.prototype.addEventListener = function (type, listener, capture) {
  // 判断一下传入的参数是否符合规格
  if (typeof type !== string || typeof listener !== function) return;

  // 缓存符合条件的事件列表
  var list = this._events[type];

  // 判断是否已经有该类型事件，若没有则添加一个新数组
  if (typeof list === undefined) list = (this._events[type] = []);

  /* 判断插入函数的位置 */
  if (!!capture) list.push(listener);
  else list.insert(0, listener);

  return this;
};

EventEngine.prototype.removeEventListener = function (type, listener, capture) {
  // 判断一下传入的参数是否符合规格
  if (typeof type !== string || typeof listener !== function) return this;

  // 缓存符合条件的事件列表
  var list = this._events[type];

  // 若没有绑定过此类事件则不需要做处理
  if (typeof list === undefined) return this;

  for (var i = 0, len = list.length; i < len; i++) {
    // 通过循环判断来确定事件列表中存在要移除的事件侦听函数
    if (list[i] == listener) {
      // 找到后将此侦听函数从事件列表中移除
      list.remove(i);
      break;
    }
  }
  return this;
};

EventEngine.prototype.fireEvent = function (type, e) {
  /// <summary>触发事件</summary>
  ///<param name="type" type="String">事件名称
  ///<param name="e" type="Object">附加参数对象

  // 若存在DOM0用法的函数，则触发
  this[on + type.toLowerCase()] && this[on + type.toLowerCase()].call(this, e);

  // 缓存符合条件的事件列表
  var list = this._events[type];

  // 若事件列表中没有内容则不需要做处理
  if (!list || list.length <= 0) return this;

  // 阻止事件冒泡开关
  var isStop = false;

  // 模拟事件对象
  window.event = { stopPropagation: function () { isStop = true; } };
  e.stopPropagation = window.event.stopPropagation;

  for (var i = 0, len = list.length; i < len; i++) {
    // 通过循环触发符条件的事件列表中存在的所有事件侦听函数
    // 若函数内返回false或事件内调用了event.stopPropagation函数则阻止接下来的所有调用
    if (list[i].call(this, e) === false || isStop) break;
  }
  return this;
};

Array.prototype.insert = function (index, value) {
  if (index > this.length) index = this.length;
  if (index < -this.length) index = 0;
  if (index < 0) index = this.length + index;
  for (var i = this.length; i > index; i--) {
    this[i] = this[i - 1];
  }
  this[index] = value;
  return this;
};

Array.prototype.remove = function (index) {
  if (isNaN(index) || index > this.length) return;
  this.splice(index, 1);
};

moudle.exports = EventEngine;