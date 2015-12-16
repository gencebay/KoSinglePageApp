define(['knockout', 'text!./ci-grid.html'], function(ko, templateMarkup) {

  function CiGrid(params) {
    this.message = ko.observable('Hello from the ci-grid component!');
  }
  
  return { viewModel: CiGrid, template: templateMarkup };

});
