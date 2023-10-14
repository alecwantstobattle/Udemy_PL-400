this.formOnLoad = function (executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello World v3", "INFO", "IDUnique14102023");
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