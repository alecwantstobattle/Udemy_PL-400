this.formOnLoad = function (executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello World v6", "INFO", "IDUnique14102023");
    if (formContext.getAttribute("fax").getValue() == null)
    {
        formContext.getAttribute("fax").setValue("123-4567");
        formContext.getControl("fax").addNotification({
            messages: ["Fax number set to default."],
            notificationLevel: "RECOMMENDATION",
            uniqueID: "IDUnique14102023-2"
        })
        formContext.getControl("fax").clearNotification();
    }

}

this.AddressStreet3Hide = function (executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("address1_line2").getValue() == null) {
        formContext.getControl("address1_composite_compositionLinkControl_address1_line3").setVisible(false);
    }
    else {
        formContext.getControl("address1_composite_compositionLinkControl_address1_line3").setVisible(true);
    }
    
}