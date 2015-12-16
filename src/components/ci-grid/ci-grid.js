define(['knockout', 'text!./ci-grid.html'], function(ko, templateMarkup) {

  function CiGrid(params) {
    this.message = ko.observable('Hello from the ci-grid component!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  CiGrid.prototype.dispose = function() { };
  
  return { viewModel: CiGrid, template: templateMarkup };

});
