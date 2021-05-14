//Initialize the form 
$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 

//Implement Save button click handler 
$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateItemForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "UsersAPI", 
 type : type, 
 data : $("#formUser").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onUserSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onUserSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divUsersGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 $("#hidUserIDSave").val(""); 
 $("#formUser")[0].reset(); 
}


$(document).on("click", ".btnUpdate", function(event)
{ 
$("#hidUserIDSave").val($(this).data("userId")); 
$("#userCode").val($(this).closest("tr").find('td:eq(0)').text()); 
$("#name").val($(this).closest("tr").find('td:eq(1)').text()); 
$("#NIC").val($(this).closest("tr").find('td:eq(2)').text()); 
$("#userEmail").val($(this).closest("tr").find('td:eq(3)').text()); 
$("#userPhone").val($(this).closest("tr").find('td:eq(4)').text()); 
$("#userType").val($(this).closest("tr").find('td:eq(5)').text()); 
$("#username").val($(this).closest("tr").find('td:eq(6)').text()); 
$("#password").val($(this).closest("tr").find('td:eq(7)').text()); 
});

$(document).on("click", ".btnRemove", function(event)
{ 
 $.ajax( 
 { 
 url : "UsersAPI", 
 type : "DELETE", 
 data : "userId=" + $(this).data("userId"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onUserDeleteComplete(response.responseText, status); 
 } 
 }); 
});

function onUserDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}
function validateItemForm() 
{ 
// CODE
if ($("#userCode").val().trim() == "") 
 { 
 return "Insert User Code."; 
 } 
// NAME
if ($("#name").val().trim() == "") 
 { 
 return "Insert Name."; 
 } 9
// NIC
if ($("#NIC").val().trim() == "") 
 { 
 return "Insert NIC"; 
 } 
if ($("#userEmail").val().trim() == "") 
{ 
 return "Insert User Email"; 
} 
if ($("#userPhone").val().trim() == "") 
{ 
 return "Insert User Phone number"; 
}
if ($("#userType").val().trim() == "") 
{ 
 return "Insert user type"; 
}
if ($("#username").val().trim() == "") 
{ 
 return "Insert username"; 
}
/*if ($("#password").val().trim() == "") 
{ 
 return "Insert password"; 
}*/
// is numerical value
var tmpPrice = $("#userPhone").val().trim(); 
if (!$.isNumeric(tmpPrice)) 
 { 
 return "Insert a number for User Phone."; 
 } 

return true; 

}







