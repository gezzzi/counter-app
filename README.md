# カウンターアプリケーション

様々な進数で数値を表示できるカウンターアプリケーションです。

## 機能

- 数値のカウントアップ/ダウン
- カウントのリセット
- 進数の切り替え（1進数、2進数、3進数、4進数、8進数、16進数）

## 使用技術

- React 18
- TypeScript
- Vite
- CSS

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone [リポジトリURL]

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## ビルド方法

```bash
# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## ディレクトリ構造

```
counter-app/
├── src/
│   ├── App.tsx        # メインのアプリケーションコンポーネント
│   ├── App.css        # スタイリング
│   └── main.tsx       # エントリーポイント
├── public/
│   └── vite.svg       # アプリケーションアイコン
├── index.html         # HTMLテンプレート
├── package.json       # 依存関係と設定
├── tsconfig.app.json  # TypeScript設定
└── vite.config.ts     # Vite設定
```

## ライセンス

MIT
