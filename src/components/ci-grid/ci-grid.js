define(['knockout', 'text!./ci-grid.html', 'utils'], function(ko, templateMarkup, utils) {

    var viewModelInstance = {};

    function StepDetails() {
        this.value = ko.observable();
        this.successItemCount = ko.observable();
        this.warningItemCount = ko.observable();
        this.errorItemCount = ko.observable();
        this.time = ko.observable();
    }

    function BuildSteps() {
        this.build = {
            value: ko.observable(),
            debug: ko.observable(),
            release: ko.observable(),
            time: ko.observable()
        }
        this.unitTest = utils.extends({}, new StepDetails);
    }

    BuildSteps.prototype.functionalTest = function(){
        utils.extends(this, StepDetails);
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

        $.getJSON('/api/items', function (data) {
            self.items([]);
            $.each(data, function (key, value) {
                var obj = utils.map(value, new KoModel());
                self.items.push(obj);
            });
        });

        window.model = viewModelInstance = this;
    }

    return {viewModel: CiGrid, template: templateMarkup};
});
