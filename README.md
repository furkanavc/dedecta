## Note

Selamlar

Projede Pinia store kullanıyorum ve gerekli fonksiyonlar için veri yönetimi yapıyorum. Styling için Tailwind CSS, tablo oluşturmak için ise Chart.js kullanıyorum.

RapidAPI ile canlı güncelleme sağlamak pek mümkün değil. En basit yöntem olarak interval ekleyebilirdim, ancak API'nin katı limitleri ve verilerin sürekli güncellenmemesi sorun oluşturuyor. Çoğu API'de sort ve filter metodları bulunmuyor; bulunanlarda ise aylık 10-20 istek gibi katı limitler mevcut.

Bu nedenle, elinde olan Instagram ve X verilerini çekip, ön planda filter ve sort işlemlerini gerçekleştirdim. Bunun ideal bir yöntem olmadığını biliyorum, bu yüzden bir arama sayfası açtım ve mevcut API’nin arama sistemini kullanarak basit bir arama özelliği ekledim.

Eğer isterseniz, vereceğiniz bir API ile revizyon yapabilirim.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
