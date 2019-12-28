# vuex-vuerouter

APIリクエストに必要なsession tokenが切れていた際、ログインページに飛ばす処理をいくつかの方法で書いてみました。

方法
1. App.vue のcreatedで`isValidToken` を呼ぶ。 
2. vue-router のナビゲーションガードガードでナビゲーション毎に `isValidToken` を呼ぶ。

- [ブログ](https://tjmschk.hatenablog.com/entry/2019/12/28/201830)
