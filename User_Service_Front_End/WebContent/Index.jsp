<%@ page import="model.User" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>User Details</title>
	<link rel="stylesheet" href="Views/bootstrap.min.css">
	<script src="Components/jquery-3.2.1.min.js"></script>
	<script src="Components/Users.js"></script>
</head>
<body>
	<div class="container"><div class="row"><div class="col-6">
	<h1>User Management</h1>
	<form id="formUser" name="formUser">
	 User code:
	 <input id="userCode" name="userCode" type="text"  
	 class="form-control" placeholder="Please provide your user code"><br>
	
	 full Name:
	 <input id="Name" name="Name" type="text"  
	 class="form-control" class="form-control" placeholder="Please provide your Full Name"><br>
	 
	 NIC: 
	 <input id="NIC" name="NIC" type="text" id="NIC" 
	 class="form-control" placeholder="Please provide your NIC number" name="NIC"><br>
			 
	 Email: 
	 <input id="email" name="email" type="email" 
	 class="form-control" placeholder="Please provide your email"><br>
	 
	 Contact Number: 
	 <input id="phone" name="phone" type="number" 
	 class="form-control" placeholder="Please provide your Contact Number"><br>
	 
	 User Type: 
	 <select name="userType" id="usertype" class="form-control" >
			<option value="admin">Admin</option>
      		<option value="researcher">Researcher</option>
      		<option value="Customer">Customer</option>
     </select><br>
     
	 UserName: 
	 <input id="username" name="username" type="text" 
	 class="form-control" placeholder="Please provide your User Name"><br>
	 
	 Password: 
	 <input name="password" type="text" 
	 class="form-control" placeholder="Please provide your password"><br>
	 
	 <input id="btnSave" name="btnSave" type="button" value="Save"
	 class="btn btn-primary">
	 
	 <input type="hidden" id="hidUserIDSave"
	 name="hidUserIDSave" value="">
	 
	</form>
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	<br>
	<div id="divItemsGrid">
	 <%
	 User userObj = new User();
	 out.print(userObj.readUserDetails());
	 %>
	</div>
	</div> </div> </div>
</body>
</html>