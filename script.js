function search() {
    // الحصول على قيمة البحث وتحويلها إلى أحرف كبيرة
    let inputSearch = document.querySelector(".input").value.toUpperCase();

    // الحصول على قائمة المنتجات
    let productList = document.querySelector(".product-list");
    let products = document.querySelectorAll(".product");
    let productNames = document.getElementsByTagName("h1");

    // حلقة لتفقد كل منتج ومقارنة اسمه بمدخل البحث
    for (let i = 0; i < productNames.length; i++) {
        let productName = productNames[i].innerHTML.toUpperCase();
        if (productName.indexOf(inputSearch) >= 0) {
            // إذا كان المنتج يحتوي على النص المُدخل، أظهره
            products[i].style.display = "";
        } else {
            // إذا لم يكن المنتج يحتوي على النص المُدخل، أخفه
            products[i].style.display = "none";
        }
    }
}









