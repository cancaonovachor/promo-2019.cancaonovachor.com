# 特設 promo サイトメンテナンス

カンサォン・ノーヴァ演奏会用特設サイト

## リポジトリ

- [CNCN1.0（2019 年）](https://github.com/cancaonovachor/promo-2019.cancaonovachor.com)
- [OL ジョイント](https://github.com/cancaonovachor/cn-ol-joint-promo)

## 環境

- Gatsby js
- Netlify or Firebase Hosting

## セットアップ

- Node の**version 13 が必須（それ以上でも以下でもいけない）**なので、nodebrew 等で v13 をインストールしておくこと
  - mac（m1）
    - [https://qiita.com/pomufgd/items/a7266db07e3ca338fd74](https://qiita.com/pomufgd/items/a7266db07e3ca338fd74)
    - すごく時間がかかる
  - mac（intel）
    - [https://www.karakaram.com/mac-nodebrew-install/](https://www.karakaram.com/mac-nodebrew-install/)
  - windows（WSL）
    - [https://qiita.com/smallriv/items/d42c6abe7fa16be4a474](https://qiita.com/smallriv/items/d42c6abe7fa16be4a474)

本間の環境は `v13.14.0`

### 起動

```jsx
npm install -g yarn // yarnを導入

yarn // 依存パッケージダウンロード

yarn develop // ローカル起動

localhost:8000で確認可能
```

## 編集ガイド

基本的に html 要素をいじるだけで色々な演奏会に適用可能

### **トップページ**

[src/components/Headers.js](https://github.com/cancaonovachor/promo-2019.cancaonovachor.com/blob/master/src/components/Headers.js)

日付や演奏タイムテーブルなど

### **ボタンクリック後のページ**

[src/components/Main.js](https://github.com/cancaonovachor/promo-2019.cancaonovachor.com/blob/master/src/components/Main.js)

※大きいファイルなので、編集に注意

コンセプト概要、ステージ詳細、アクセスなど

### 画像の挿入方法

- src/images に画像ファイルを配置する
- js ファイルの冒頭に `import zentai from '../images/zentai.jpg'` というようにインポート分を書く
- `<img src={zentai} alt="" />` とコンポーネント内で使用できるようになる

### CSS の編集

- src/assets/scss フォルダの scss を編集する
- chrome developer ツールで css クラスとか見て、いじると反映されているのが分かるかな

### コンテンツのボタンを増やしたい等々

- ちょっとむずいので本間に聞いてください
