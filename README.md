# OSOptimizer
Attributeler ile belli başlı bazı CSS düzenlemeleri sağlayan Jquery fonksiyonları içeren mini kütüphane.

Düzen aşağıdaki şekilde olmalıdır.

```
<html>
<head>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"rel="stylesheet" />
</head>
<body>
CONTENT
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="./osoptimizer.js"></script>
</body>
</html>
```

## Attribute Listesi ve İşlevleri :

### dt-font
Numerik değer verilmelidir.

**Örnek:**
```html
dt-font="25"
```
### dt-width
Numerik ya da yüzdelik değer verilmelidir.

**Örnek:**
```html
dt-width="25%" veya dt-width="200"
```
***

### dt-bgc
Arkaplan rengini ayarlar. İngilizce renk adı veya renk kodu girmelisiniz.

**Örnek:**
```html
dt-bgc="red" veya dt-bgc="#ff0000"
```
### dt-color
Yazı rengini ayarlar. İngilizce renk adı veya renk kodu girmelisiniz.

**Örnek:**
```html
dt-color="red" veya dt-color="#ff0000"
```
### dt-bg-image
Arkaplan resmini ayarlar. Url girmelisiniz.

**Örnek:**
```html
dt-bg-image="http://www.resimlink.com/resim.jpg"
```
### dt-bg-size
Arkaplan boyutunu ayarlar. CSS background-size özellikleri girebilirsiniz.

**Örnek:**
```html
dt-bg-size="cover"
```
***
### dt-col1
Herhangi bir değer vermeye gerek yoktur. Bootstrap col-md-1 classını otomatik olarak elemente ekler.

**Örnek:**
```html
dt-col1
```
Not:

```
  dt-col1 / dt-col12 arası tüm attributeler kullanılabilir.
```
***
### dt-radius
Numerik ya da yüzdelik değer verilmelidir.

**Örnek:**
```html
dt-radius="50%" veya dt-radius="10"
```


_v1.0.0, on May 28, 2018._
