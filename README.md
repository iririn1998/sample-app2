Reactのレンダリングについての挙動を実際の画面挙動を確認しながら確認する

# 問題
## 問題1. 画面の表示が変わってなくても再レンダリングされる
- useStateの挙動について[useState – React](https://ja.react.dev/reference/react/useState)
- reactではstateが更新されたら再レンダリングされるよ！
- useRefやlet/constの更新はレンダリングに関係ない

- useStateが行なっていること
	- レンダー間での変数の保持
	- set関数は「state を別の値に更新し、**再レンダーをトリガーする**」
- ローカル変数（let hoge = 1）はstate を別の値に更新だけ、再レンダリングをトリガーしてくれない

- 画面に変更がない場合でもset関数はレンダーをトリガーする

- letは再レンダリングでも初期化される
- useRefは再レンダリングで初期化されない
- どちらもレンダリングをトリガーしない

直感と異なるのは、画面の描画に変更がなくても再レンダリングは行われていること

### 参考文献
- [useState – React](https://ja.react.dev/reference/react/useState)
- [state：コンポーネントのメモリ – React](https://ja.react.dev/learn/state-a-components-memory)
- [useRef – React](https://ja.react.dev/reference/react/useRef)

## 問題2. 親コンポーネントが再レンダリングされた時
- 親コンポーネントで再レンダリングが行われると、子コンポーネントでも再レンダリングが行われる

- 子コンポーネントで重い処理を行う場合はアプリケーション全体が重くなる

どうすれば解決できるのか？
1. メモ化！
	- よくあるやーつ
	- props が変更されていない場合にコンポーネントの再レンダーをスキップ
	- ちなみに、メモ化してもそのコンポーネント内でレンダーがトリガーされた場合はpropsの変更がなくてもレンダリングされる。
2. composition！
	- children（ReactNode）で渡すやーつ
	- コンポーネントに対する責務を分割できたり（props地獄を軽減）優秀なやーつ
	- 再レンダリングが行われない理由は、「childrenは単なるpropsだから」らしい、、、
		- propsのchildrenは前回と変更がないので再レンダリングがトリガーされない
		- Reactは差分を検出して必要最低限の箇所だけレンダリングを行う。前回のレンダリング結果からchildrenは差分がないので再レンダリングされない
		- 子コンポーネントであるが、実際には親側で監視されている
		- なので、Contentの親側で再レンダリングがトリガーされるとChildも再レンダリングされる（もちろんmemo化の場合は再レンダリングされない）

### 参考文献
- [memo – React](https://ja.react.dev/reference/react/memo)
- [Reactで再レンダリングを抑えるシンプルな方法](https://zenn.dev/counterworks/articles/react-composition)
- [The mystery of React Element, children, parents and re-renders](https://www.developerway.com/posts/react-elements-children-parents)

## 問題3. 関数としたコンポーネント
1. 関数呼び出し
	- const Component = () => <Child />;
	- { Component() }
	- 関数呼び出しなので、Reactのコンポーネントライフサイクルは通らない
2. コンポーネント呼び出し
	- const Component = () => <Child />;
	- { <Component /> }
	- Reactのライフサイクルに沿ったもの
	- Componentは関数なので、レンダリングの時に再生成される
		- 再生成されるので、コンポーネントはマウントされる（初期化とか）

React的にはそもそもコンポーネント内で、コンポーネントをネストを行うことは推奨していない

## 問題4. 同じ構造のDOMの表示が切り替わった時
- Reactが見ているのは、UIツリー
- スタイルが違っても構造が一緒なら同じものとして扱う
	- 同じ位置の異なるコンポーネントは state をリセットする
- 再レンダー間で state を維持したい場合、ツリーの構造はレンダー間で「合致」する必要があ
	- 逆に、構造が異なると元のコンポーネントは削除されて新しいコンポーネントなる

### 参考文献
- [Reactにおける\<Component /\>とComponent()の違い](https://zenn.dev/chot/articles/f0d20f46b60818)
- [初めてのコンポーネント – React](https://ja.react.dev/learn/your-first-component#nesting-and-organizing-components)

# まとめ
- Reactの「再レンダリング」に焦点を当てた問題で必要なレンダリングと不要な再レンダリングを確認した
- 再レンダリングの条件は以下
	1. 状態（state）の変更
	2. 親 (または子/children) の再レンダリング
	3. Context の変更
	4. React hooks の変更
- 不要な再レンダリングがダメかと言われるとそうではない。そもそもこんなこと考えて開発したくないし、時間もかかる。ただ、不要なレンダリングが多すぎるとアプリケーションに遅延が発生し、ユーザー体験が損なわれる。

# 参考文献
- [React再レンダリングガイド: 一度に全て理解する #Next.js - Qiita](https://qiita.com/yokoto/items/ee3ed0b3ca905b9016d3)