import { Assertions, Pipeline, Step } from '@ephox/agar';
import * as Bidi from 'tinymce/core/text/Bidi';
import { UnitTest } from '@ephox/bedrock-client';

UnitTest.asynctest('atomic.tinymce.core.text.BidiTest', function (success, failure) {

  const sTestHasStrongRtl = Step.sync(function () {
    Assertions.assertEq('Hebrew is strong rtl', true, Bidi.hasStrongRtl('\u05D4\u05E7\u05D3\u05E9'));
    Assertions.assertEq('Abc is not strong rtl', false, Bidi.hasStrongRtl('abc'));
    Assertions.assertEq('Dots are neutral', false, Bidi.hasStrongRtl('.'));
  });

  Pipeline.async({}, [
    sTestHasStrongRtl
  ], function () {
    success();
  }, failure);
});
