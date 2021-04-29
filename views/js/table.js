function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
                //table that will be displayed on the webpage
                var tableStart = `<table>
                            <thead>
                            <tr><th>Category</th><th>Brand</th><th>Item</th><th>Price</th>
                            </tr>
                            </thead>
                            <tbody>`;
                var rows = ``;
                for(var i in html){ //
                rows += `<tr>
                            <td>${html[i].category}</td>
                            <td>${html[i].brand}</td>
                            <td>${html[i].item}</td>
                            <td>${html[i].price}</td>
                            </tr>`;
            }

                var tableEnd = `</tbody>
                                </table>`;
                
                
			$("#results").append($(tableStart + rows + tableEnd)); //append the generated table to the results container
			//	select_row();
			}
		});
	};
	$.getJSONuncached("https://8000-coffee-grasshopper-s7u4ufb3.ws-eu03.gitpod.io/products")
};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='4']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		// $.ajax(
		// {
		// 	url: "/post/delete",
		// 	type: "POST",
		// 	data:
		// 	{
		// 		section: sec,
		// 		entree: ent
		// 	},
		// 	cache: false,
		// 	success: setTimeout(draw_table, 1000)
		// })
	})
};

$(document).ready(function ()
{
	draw_table();
});