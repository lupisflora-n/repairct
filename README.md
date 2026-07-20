# Repairct LP

RepairctのInstagram導線型ランディングページです。相模原を中心とした住宅内装リペアの相談窓口として、Instagramプロフィールから訪れた人をDMへ案内することを目的にしています。

## 使用技術

- HTML
- CSS
- JavaScript
- 外部フレームワークなし

## ファイル構成

```text
index.html
style.css
script.js
README.md
AGENTS.md
assets/images/
docs/project-brief.md
docs/lp-blueprint.md
docs/decisions.md
docs/todo.md
docs/github-pages.md
```

## 後から差し替える項目

- Instagram URL: 現在は `#`
- 施工写真: `assets/images/placeholder-*.jpg`
- 代表者名: 田中佑弥
- ロゴ画像: `index.html` のヘッダー内ブランドマーク

## ローカルでの確認方法

`index.html` をブラウザで開いて確認します。静的LPのため、開発サーバーは不要です。

## GitHub Pagesでのプレビュー

ネットワークやLINEのファイル表示に左右されない確認用として、GitHub PagesでURLプレビューする想定です。

- 公開元: GitHub Actions
- 公開対象: リポジトリ直下の静的ファイル
- 更新方法: `main` にpushするとGitHub ActionsがPagesへ反映
- 想定URL: `https://lupisflora-n.github.io/repairct/`

GitHub側でPagesを有効化する場合は、`Settings > Pages` の Source を `GitHub Actions` にします。

初回公開後は、LP本体を編集してpushするたびに同じプレビューURLが更新されます。

詳しい初回設定は [docs/github-pages.md](docs/github-pages.md) を参照してください。

## 緊急プレビューURL

GitHub Pagesが未有効で `https://lupisflora-n.github.io/repairct/` が404になる場合は、暫定確認用として以下を使います。

https://htmlpreview.github.io/?https://github.com/lupisflora-n/repairct/blob/gh-pages/index.html
