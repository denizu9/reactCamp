
export const cartItems = [{quantity:1, product: {productName:"Çubuk Kraker"}}]

// default değeri direkt 1 adet çubuk kraker verdik. Yani initial state'imiz 1 adet çubuk kraker objesi.
// Array içerisinde tek bir adet objemiz var. Burada objeler ile çalıştığımız için, initial state'i yani burayı kullandığımız 
// alanlarda spread yapacağız. 

// Spread -> Array'in içerisindeki objeleri ayırma. Burada bir adet objemiz var ancak 2 veya daha fazla da olabilir.
// Bu yüzden spread kullanışlı olacaktır.