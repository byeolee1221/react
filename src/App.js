import './App.css';
import { useState } from 'react';

function App() {

  const postName = [
    "여자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학"
  ];

  const [name, setName] = useState(postName);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);

  const nameChangeHandler = () => {
    let postNameCopy = [...postName];
    postNameCopy[0] = "남자 코트 추천";
    setName(postNameCopy);
  }

  const likeChangeHandler = (num) => {
    const likeNumCopy = [...like];
    likeNumCopy[num]++;
    setLike(likeNumCopy);
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

  const Modal = (props) => {
    return (
      <div className="modal">
        <h4>{props.name}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.nameChange}>글 수정</button>
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
      {name.map((data, i) => {
        return (
          <div className="list" key={i}>
            <h4 className="post" onClick={() => {modalHandler(i); setTitle(i)}}>
              {data}
              <span onClick={likeChangeHandler} className="likeSpan">
                👍
              </span>
              {like[i]}
            </h4>
            <p>1월 4일 발행</p>
            <button onClick={nameChangeHandler}>성별 변경</button>
            <button onClick={sortChangeHandler}>가나다순 정렬</button>
          </div>
        );
      })}
      <button onClick={modalHandler}>모달</button>
      {modal ? <Modal name={name[title]} nameChange={nameChangeHandler} /> : null}
      <Apple />
    </div>
  );
}

export default App;
