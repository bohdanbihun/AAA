(function () {
    'use strict';

    var factory2 = new ShoppingListService();

    angular.module('ControllerAsApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;

        var shoppingList = ShoppingListFactory();

        list1.item = shoppingList.getItems();

        list1.removeItem = function (index) {
            shoppingList.removeItem(index);
        };
    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];

    function ShoppingListController2(ShoppingListFactory) {
        var list2 = this;

        var shoppingList = ShoppingListFactory();

        list2.item = shoppingList.getBoughtItems();
    }

    function ShoppingListService() {
        var service = this;

        var items = [
            {
                mark: 'danon',
                quantity: 3
            },
            {
                mark: 'actuvia',
                quantity: 1
            },
            {
               mark: 'rashtishka',
                quantity: 4
            },
            {
                mark: 'galechanka',
                quantity: 5
            },
			            {
                mark: 'nesti',
                quantity: 7
            },
			            {
                mark: 'prostockaseno',
                quantity: 3
            },
            {
                mark: 'fruti',
                quantity: 7
            },
        ];
        var boughtItems = [];

        service.removeItem = function (itemIndex) {
            boughtItems.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };
		
		
		  service.removeItem2 = function (itemIndex) {
            boughtItems.delete(items[itemIndex]);
            items.delete(itemIndex, 1);
        };


        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

    function ShoppingListFactory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }

})();
