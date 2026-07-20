# GitHub Pages Preview

## 目的

スマホのLINEでHTMLファイルを送る方式では、リンク表示やファイル表示が端末・アプリに左右される。
そのため、Repairct LPのプレビューはGitHub PagesのURLで確認する。

## 基本方針

- リポジトリ名: `repairct`
- 公開元ブランチ: `main`
- 公開方式: GitHub Actions
- 公開対象: リポジトリ直下の静的LP
- 想定URL: `https://lupisflora-n.github.io/repairct/`

## 反映の流れ

1. `index.html` / `style.css` / `script.js` / `assets/images/` を編集する。
2. 変更を `main` にcommitする。
3. `main` をGitHubへpushする。
4. `.github/workflows/pages.yml` がGitHub Pagesへデプロイする。
5. 同じGitHub Pages URLに最新LPが反映される。

## GitHub側で必要な初回設定

1. GitHubで `repairct` リポジトリを作成する。
2. ローカルのこのプロジェクトをそのリポジトリへpushする。
3. GitHubの `Settings > Pages` を開く。
4. Sourceを `GitHub Actions` にする。
5. 保存後、公開URLを確認する。

## 注意

- GitHub Pagesを使う場合、基本的に公開URLはインターネット上からアクセスできる。
- 非公開前提の内容や未確認写真は本番掲載前に入れない。
- 施工写真を入れる場合は掲載許可を確認してからpushする。
- GitHub Pagesサイトが未作成の場合は `https://lupisflora-n.github.io/repairct/` が404になる。
- その場合は `Settings > Pages` で `GitHub Actions` を保存する。
- `htmlpreview.github.io` はキャッシュや取得仕様で古い内容が出る場合があるため、スマホ確認には使わない。
- 反映直後に古い表示が残る場合は、キャッシュ回避用に `https://lupisflora-n.github.io/repairct/?v=439ce25` のようにクエリ付きURLで確認する。
