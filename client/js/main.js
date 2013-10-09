'use strict';

(function () {

  function main() {
    data.addEventListener('submit', function (ev) {
      ev.stopPropagation();
      ev.preventDefault();

      console.log(data.list.value);

      return false;
    });
  }

  document.addEventListener('DOMContentLoaded', main);
})()
