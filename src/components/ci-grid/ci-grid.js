define(['knockout', 'text!./ci-grid.html', 'utils'], function(ko, templateMarkup, utils) {

  function BuildSteps(){
    this.build = {
      value: ko.observable(),
      debug: ko.observable(),
      release: ko.observable(),
      time: ko.observable()
    }
    this.unitTest = {
      value: ko.observable(),
      successItemCount: ko.observable(),
      warningItemCount: ko.observable(),
      errorItemCount: ko.observable(),
      time: ko.observable()
    }
  }

  function KoModel() {
    this.changeList = ko.observable();
    this.owner = ko.observable();
    this.startedDate = ko.observable();
    this.startedTime = ko.observable();
    this.buildSteps = new BuildSteps();
  }

  function CiGrid(params) {
    var self = this;
    self.items = ko.observableArray();

    $.getJSON('/api/items', function(data) {
      self.items([]);
      $.each(data, function(key, value){
        var obj = utils.map(value, new KoModel());
        self.items.push(obj);
      });
    });
  }
  
  return { viewModel: CiGrid, template: templateMarkup };

});
