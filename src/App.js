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
  const [userInput, setUserInput] = useState("");
  const [newPost, setNewPost] = useState(false);

  let nowDate = Date();

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

  const addPostHandler = () => {
    let postNameCopy = [...name];
    postNameCopy.unshift(userInput);

    if (!userInput) {
      return;
    };

    setName(postNameCopy);
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
            <div className="list-inner">
              <h4 className="post" onClick={() => {modalHandler(i); setTitle(i)}}>
                {data}
                <span onClick={(e) => {e.stopPropagation(); likeChangeHandler(i)}} className="likeSpan">
                  👍
                </span>
                {like[i]}
              </h4>
              <button onClick={() => {
                let postNameCopy = [...name];
                postNameCopy.splice(i, 1);
                setName(postNameCopy);
              }}>삭제</button>
            </div>
            <p>1월 4일 발행</p>
            <p>{nowDate}</p>
            {newPost ? <p>{userInput}</p> : ""}
            <button onClick={nameChangeHandler}>성별 변경</button>
            <button onClick={sortChangeHandler}>가나다순 정렬</button>
          </div>
        );
      })}
      <div className="input-box">
        <input type="text" onChange={(e) => {setUserInput(e.target.value)}} />
        <button onClick={addPostHandler}>추가</button>
      </div>
      <button onClick={modalHandler}>모달</button>
      {modal ? <Modal name={name[title]} nameChange={nameChangeHandler} /> : null}
      <Apple />
    </div>
  );
}

export default App;
