# GitHub Pages Preview

## 目的

スマホのLINEでHTMLファイルを送る方式では、リンク表示やファイル表示が端末・アプリに左右される。
そのため、Repairct LPのプレビューはGitHub PagesのURLで確認する。

## 基本方針

- リポジトリ名: `repairct`
- 公開元ブランチ: `gh-pages`
- 公開方式: Deploy from a branch
- 公開対象: リポジトリ直下の静的LP
- 想定URL: `https://lupisflora-n.github.io/repairct/`

## 反映の流れ

1. `index.html` / `style.css` / `script.js` / `assets/images/` を編集する。
2. 変更を `main` にcommitする。
3. `main` をGitHubへpushする。
4. `.github/workflows/sync-gh-pages.yml` が `gh-pages` ブランチを自動同期する。
5. GitHub Pagesが `gh-pages` ブランチの内容を公開する。
6. 同じGitHub Pages URLに最新LPが反映される。

## GitHub側で必要な初回設定

1. GitHubで `repairct` リポジトリを作成する。
2. ローカルのこのプロジェクトをそのリポジトリへpushする。
3. GitHubの `Settings > Pages` を開く。
4. Sourceを `Deploy from a branch` にする。
5. Branchを `gh-pages`、Folderを `/root` にする。
6. 保存後、公開URLを確認する。

## 注意

- GitHub Pagesを使う場合、基本的に公開URLはインターネット上からアクセスできる。
- 非公開前提の内容や未確認写真は本番掲載前に入れない。
- 施工写真を入れる場合は掲載許可を確認してからpushする。
- `gh-pages` ブランチに `index.html` が存在しても、GitHub Pagesサイトが未作成の場合は `https://lupisflora-n.github.io/repairct/` が404になる。
- その場合は `Settings > Pages` で `Deploy from a branch` / `gh-pages` / `/root` を保存する。
- 急ぎで知人に共有する場合は、暫定URLとして `https://htmlpreview.github.io/?https://github.com/lupisflora-n/repairct/blob/gh-pages/index.html` を使う。
