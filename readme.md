# O'REILLY - Test-Driven-Development 學習手冊
> 此專案將書中js的測試寫法撰寫成Jest的方式，對於python不熟悉完全遵循書中之方法，暫時依照書中其方式。

編輯中...

## TDD如何上手
共同開始皆為：將問題與答案，一一列出

### GO
原生GO有測試方式，func 名稱一定要以 **Test** 作為開頭 \
內建 testing 套件，可以使用簡易的 `t.Fatal` 或 `t.Error` 來驗證錯誤，差異在於 `t.Fatal` 會中斷測試，而 `t.Error` 不會

#### testing frameworks - [testify](https://github.com/stretchr/testify)

---

### Typescript
原生Javascript無原生測試方式
#### testing frameworks - [Jest](https://jestjs.io)
Jest相關設定檔案，使用 `jest.config.js` 管理設定檔
