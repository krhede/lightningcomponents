({
    submitForm: function(component, event, helper) {
        if(helper.validateItemForm(component)){
            // Create the new item
            var item = component.get("v.newItem");
            helper.createItem(component, item);
        }
    }
})