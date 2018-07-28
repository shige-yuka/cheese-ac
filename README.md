# cheese-ac

cloneしてください。
`git clone https://github.com/shige-yuka/cheese-ac.git`

cloneが完了したら、下記のコマンドで環境を立ち上げてください。

`$ npm run start`

[http://localhost:3000/](http://localhost:3000/)でcheese academyサイトが表示されたら成功です。

成功しなかった場合は次に進んでください。

## node.jsがインストールされているか確認

`$ node -v`
 
バージョンが表示されたらnode.jsはインストール済みです。
npmの導入に進んでください。

## npmを導入する

インストールされているか確認します。バージョンが表示されたらnuxt-edgeをインストールに進んでください。

`npm -v`

バージョンが表示されなかった場合はnpmを導入してください。

`npm init`

色々出てきますが、あとで編集できるので全部enterで大丈夫です。

## nuxt-edgeをインストール

`$ npm install nuxt`

## package.jsonにscriptsを追記

インストールが完了したら package.jsonにscripsを追記します。

```
"scripts": {
  "start": "nuxt"
}
```

## npm run startをもう一度試してみる

下記コマンドで開発環境を起動します。

`npm run start`

[http://localhost:3000/](http://localhost:3000/)でcheese academyサイトが表示されたら成功です。

