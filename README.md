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

- Instagram URL: `https://www.instagram.com/yu_2k4?igsh=cmZ2MjN5dHgyc2Fm&utm_source=qr`
- 施工写真: `assets/images/works/` に現在のBefore / After写真を配置済み
- 代表者名: 田中佑弥
- ロゴ画像: ヒーローに `assets/logos/repairct-wordmark-flow.svg`、ヘッダーに `assets/logos/repairct-r-flow.svg`

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

## スマホ確認URL

スマホやLINEで確認する場合は、以下のGitHub Pages URLを使います。

https://lupisflora-n.github.io/repairct/

反映直後に古い表示が残る場合は、ブラウザやLINE内ブラウザのキャッシュ回避用に以下を使います。

`https://lupisflora-n.github.io/repairct/?v=任意の文字列`

例: `https://lupisflora-n.github.io/repairct/?v=latest`
