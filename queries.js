// =========== SQL queries ===========

// Joins 3 tables Products, Categories, Suppliers
// Foriegn keys are CategoryID and SupplierID

SELECT Products.ProductID, Products.ProductName, Suppliers.SupplierName, Categories.CategoryName as Category, Products.Unit, Products.Price
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID;