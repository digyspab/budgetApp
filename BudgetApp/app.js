/**
 * @BDGET CONTROLLER
 */
var budgetController = (function () {

    var Expense = function(id, description, value) { // function constructor
        this.id = id, 
        this.description = description,
        this.value = value
    }

    var Income = function(id, description, value) {
        this.id = id, 
        this.description = description,
        this.value = value
    }
    
})();


var Income = function(id, description, value) {
    this.id = id, 
    this.description = description,
    this.value = value
}

/**
 * @UI CONTROLLER
 */
var UIController = (function() {

    var DOMstrings = { // private
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }

    return {
        getInput: function() { // public
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        getDOMstrings: function() { // returning DOMstring publically
            return DOMstrings;
        }
    }

})();

/**
 * @GLOBAL APP CONTROLLER
 */
var controller = (function(budgCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(evnent) {
            if(evnent.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        });
    }
    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller
 
        // 3. Add the item to the UI
        
        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started..');
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);
controller.init();