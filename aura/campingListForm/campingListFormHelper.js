({
	createItem : function(component, newItem) {
        var createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": newItem });
        createEvent.fire();
        
        //Reset the form
        component.set("v.newItem",{'sobjectType': 'Camping_Item__c',
                                   'Name': '',
                                   'Price__c': 0,                                   
                                   'Quantity__c': 0,
                                   'Packed__c': false });
	},
    
    validateItemForm: function(component) {
        
        // Simplistic error checking
        var validItem = true;
        
        // Name must not be blank
        var nameField = component.find("itemname");
        var itemname = nameField.get("v.value");
        if ($A.util.isEmpty(itemname)){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        
        // price must be set, must be a positive number
        var priceField = component.find("itemprice");
        var price = priceField.get("v.value");
        if ($A.util.isEmpty(price) || isNaN(price) || (price <= 0.0)){
            validItem = false;
            priceField.set("v.errors", [{message:"Enter an item price."}]);
        }
        else {
            // If the amount looks good, unset any errors...
            priceField.set("v.errors", null);
        }
        
        return(validItem);
    }
})