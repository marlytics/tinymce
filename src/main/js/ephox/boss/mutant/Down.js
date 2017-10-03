define(
  'ephox.boss.mutant.Down',

  [
    'ephox.boss.mutant.Comparator',
    'ephox.katamari.api.Arr'
  ],

  function (Comparator, Arr) {
    var selector = function (item, query) {
      return Arr.bind(item.children || [], function (child) {
        var rest = selector(child, query);
        return Comparator.is(child, query) ? [ child ].concat(rest) : rest;
      });
    };

    var predicate = function (item, pred) {
      return Arr.bind(item.children || [], function (child) {
        var rest = predicate(child, pred);
        return pred(child) ? [ child ].concat(rest) : rest;
      });
    };

    return {
      selector: selector,
      predicate: predicate
    };
  }
);