this.formOnLoad = function (executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello World v3", "INFO", "IDUnique14102023");
    if (formContext.getAttribute("fax").getValue() == null)
    {
        formContext.getAttribute("fax").setValue("123-4567");
    }
    
}