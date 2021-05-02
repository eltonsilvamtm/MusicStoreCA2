
// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};

$(function(){
    $('#createProduct').submit(function(){
        $.ajax(
		{
			url: 'https://black-opossum-2tt6smv6.ws-eu04.gitpod.io/products',
            type: 'POST',
            contentType:'application/json',
            data: JSON.stringify({ 
                "brand": $('#brand').val(),
                "item": $('#item').val(),
                "price": $('#price').val(),
                "category": $('#category').val()}),
			cache: false,
			success: function ()
			{
              draw_table();
			}
		});
    });
});