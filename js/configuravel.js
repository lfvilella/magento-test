Product.Config.prototype.configureElement = Product.Config.prototype.configureElement.wrap(function(parentMethod, element){
    console.log('Passsouuu!');
    return parentMethod(element);
});