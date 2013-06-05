define(
  'ephox.boss.api.DomUniverse',

  [
    'ephox.peanut.Fun',
    'ephox.sugar.api.Compare',
    'ephox.sugar.api.Css',
    'ephox.sugar.api.Element',
    'ephox.sugar.api.Insert',
    'ephox.sugar.api.InsertAll',
    'ephox.sugar.api.Node',
    'ephox.sugar.api.PredicateFind',
    'ephox.sugar.api.Remove',
    'ephox.sugar.api.SelectorFilter',
    'ephox.sugar.api.SelectorFind',
    'ephox.sugar.api.Text',
    'ephox.sugar.api.Traverse'
  ],

  function (Fun, Compare, Css, Element, Insert, InsertAll, Node, PredicateFind, Remove, SelectorFilter, SelectorFind, Text, Traverse) {
    return function () {
      var clone = function (element) {
        return Element.fromDom(element.dom().cloneNode(false));
      };

      return {
        up: Fun.constant({
          selector: SelectorFind.ancestor,
          predicate: PredicateFind.ancestor,
          all: Traverse.parents
        }),
        down: Fun.constant({
          selector: SelectorFilter.descendants
        }),
        styles: Fun.constant({
          get: Css.get,
          set: Css.set,
          remove: Css.remove
        }),
        insert: Fun.constant({
          before: Insert.before,
          after: Insert.after,
          afterAll: InsertAll.after,
          append: Insert.append,
          appendAll: InsertAll.append,
          prepend: Insert.prepend,
          wrap: Insert.wrap
        }),
        remove: Fun.constant({
          unwrap: Remove.unwrap
        }),
        create: Fun.constant({
          nu: Element.fromTag,
          clone: clone,
          text: Element.fromText
        }),
        property: Fun.constant({
          children: Traverse.children,
          name: Node.name,
          parent: Traverse.parent,
          isText: Node.isText,
          isElement: Node.isElement,
          getText: Text.get,
          setText: Text.set
        }),
        eq: Compare.eq
      };
    };
  }
);
