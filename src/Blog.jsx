import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBarExport';
import Hoge from './components/HogeExport'

const Blog = () => {

  // componentDidMount() {
  //   // ボタンがクリックされたらいいねをカウントアップする　イベントリスナに設定するコールバック関数は()を付けない
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // componentDidUpdate() {
  //   console.log(this.state.count);
  //   if(this.state.count >= 10) {
  //     this.setState({ count: 0 })
  //   }
  // }

  // // ページを離れる時、イベントを解除する
  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // // 公開状態を反転させる
  // togglePublished = () => {
  //   this.setState({
  //     isPublished: !this.state.isPublished
  //   })
  // };

  // countUp = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }
  return (
    <>
      {/* 関数は関数式にして渡す。 */}
      <Article 
        title={"React"} 
        // isPublished={this.state.isPublished} 
        // order={this.state.order}
        // toggle={() => this.togglePublished()}
        // count={this.state.count}
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  )
  
}

export default Blog