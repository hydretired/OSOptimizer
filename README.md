# OSLibrary
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
<script src="./oslibrary.js"></script>
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
Numerik yada yüzdelik değer verilmelidir.

**Örnek:**
```html
dt-width="25%" veya dt-width="200"
```
### dt-width
Numerik yada yüzdelik değer verilmelidir.

**Örnek:**
```html
dt-width="25%" veya dt-width="200"
```
dt-font -> Numerik değer verilmelidir. Örnek: dt-font="25"
dt-width -> Numerik yada yüzdelik değer verilmelidir. Örnek: dt-width="25%" veya dt-width="200"

dt-align-center -> Herhangi bir değer vermeye gerek yoktur. Yazıldığı elementin içindeki yazıyı ortalar. 
dt-align-left -> Herhangi bir değer vermeye gerek yoktur. Yazıldığı elementin içindeki yazıyı sola yaslar. 
dt-align-right -> Herhangi bir değer vermeye gerek yoktur. Yazıldığı elementin içindeki yazıyı sağa yaslar. 

dt-padding -> Tüm yönlerden padding verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-padding="25%" veya dt-padding="30"
dt-pt -> Üstten padding verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-pt="25%" veya dt-pt="30"
dt-pr -> Sağdan padding verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-pr="25%" veya dt-pr="30"
dt-pb -> Aşağıdan padding verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-pb="25%" veya dt-pb="30"
dt-pl -> Soldan padding verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-pl="25%" veya dt-pl="30"

dt-margin -> Tüm yönlerden margin verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-margin="25%" veya dt-margin="30"
dt-mt -> Üstten margin verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-mt="25%" veya dt-mt="30"
dt-mr -> Sağdan margin verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-mr="25%" veya dt-mr="30"
dt-mb -> Aşağıdan margin verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-mb="25%" veya dt-mb="30"
dt-ml -> Soldan margin verir.Numerik yada yüzdelik değer verilmelidir. Örnek: dt-ml="25%" veya dt-ml="30"

dt-bgc -> Arkaplan rengini ayarlar. İngilizce renk adı veya renk kodu girmelisiniz. Örnek: dt-bgc="red" veya dt-bgc="#ff0000"
dt-color -> Yazı rengini ayarlar. İngilizce renk adı veya renk kodu girmelisiniz. Örnek: dt-color="red" veya dt-color="#ff0000"
dt-bg-image -> Arkaplan resmini ayarlar. Url girmelisiniz. Örnek: dt-bg-image="http://www.resimlink.com/resim.jpg"
dt-bg-size -> Arkaplan boyutunu ayarlar. CSS background-size özellikleri girebilirsiniz. Örnek: dt-bg-size="cover"

dt-col1 -> Herhangi bir değer vermeye gerek yoktur. Bootstrap col-md-1 classını otomatik olarak elemente ekler. Örnek: dt-col1
NOT: dt-col1 / dt-col12 arası tüm attributeler kullanılabilir.

dt-radius -> Numerik yada yüzdelik değer verilmelidir. Örnek: dt-radius="50%" veya dt-radius="10"
