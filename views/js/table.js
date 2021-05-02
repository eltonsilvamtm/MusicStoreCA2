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
			success: function (ejs)
			{
                //table that will be displayed on the webpage
                var tableStart = `<table>
                            <thead>
                            <tr>
                            <th>Category</th><th>Brand</th><th>Item</th><th>Price</th><th>Action</th>
                            </tr>
                            </thead>
                            <tbody>`;
                var rows = ``;
                for(var i in ejs){ //
                rows += `<tr>
                            <td>${ejs[i].category}</td>
                            <td>${ejs[i].brand}</td>
                            <td>${ejs[i].item}</td>
                            <td>${ejs[i].price}</td>
                            <td></td>
                            </tr>`;
            }

                var tableEnd = `</tbody>
                                </table>`;
                
                
			$("#results").append($(tableStart + rows + tableEnd)); //append the generated table to the results container
			//	select_row();
			}
		});
	};
	$.getJSONuncached("https://8000-black-opossum-2tt6smv6.ws-eu04.gitpod.io/products")
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