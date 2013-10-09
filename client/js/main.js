'use strict';

$(function () {
  var $data = $('#data'),
      $preview = $('#preview'),
      $printBtn = $('button[name=print]'),
      templates = { };

  $.when($.get('receipt2.html'), $.get('receipt2-body.html'))
    .done(function (doc, body) {
      var previewDoc;

      $('button[name=generate]').removeAttr('disabled');
      templates.doc = doc[0];
      templates.body = body[0];

      previewDoc = $preview[0].contentDocument,
      previewDoc.open();
      previewDoc.write(templates.doc);
      previewDoc.close();
    });

  $data.on('submit', function (ev) {
    var dataList,
        $doc = $(templates.doc),
        amount = data.amount.value,
        month = data.month.value;

    $preview.contents().find('body').html('');

    dataList = data.list.value.split('\n');
    dataList.forEach(function (entry) {
      if (!entry) { console.log('Empty, ignore'); return; }
      var $receipt = $(templates.body);
      $receipt.find('.name').html(entry);
      $receipt.find('.amount').html(amount);
      $receipt.find('.month').html(month);
      $preview.contents().find('body').append($receipt);
    });

    $printBtn.removeAttr('disabled');
    ev.stopPropagation();
    ev.preventDefault();
    return false;
  });

  $printBtn.on('click', function () {
    window.frames['preview'].print();
    return false;
  });

});
