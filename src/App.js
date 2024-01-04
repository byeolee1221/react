import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  const postName = [
    "여자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학"
  ];

  const [name, setName] = useState(postName);
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  const nameChangeHandler = () => {
    let postNameCopy = [...postName];
    postNameCopy[0] = "남자 코트 추천";
    setName(postNameCopy);
  }

  const likeChangeHandler = () => {
    setLike(like + 1);
  }

  const sortChangeHandler = () => {
    let postNameCopy = [...postName];
    postNameCopy.sort();
    setName(postNameCopy);
  }

  const modalHandler = () => {
    setModal(true);

    if (modal) {
      setModal(false);
    }
  }

  const Modal = () => {
    return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }

  const Apple = () => {
    return (
      <p>
        애플코딩 못생김.
      </p>
    );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4>{name[0]} <span onClick={likeChangeHandler} className="likeSpan">👍</span> {like} </h4>
        <p>1월 4일 발행</p>
        <button onClick={nameChangeHandler}>성별 변경</button>
        <button onClick={sortChangeHandler}>가나다순 정렬</button>
      </div>
      <div className="list">
        <h4>{name[1]}</h4>
        <p>1월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{name[2]}</h4>
        <p>1월 4일 발행</p>
      </div>
      <button onClick={modalHandler}>모달</button>
      {modal ? <Modal /> : null}
      <Apple />
    </div>
  );
}

export default App;
