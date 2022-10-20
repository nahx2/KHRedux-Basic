import React, { useEffect, useRef, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MessageLi } from "../style/TalkStyle";

const firebaseConfig = {
  apiKey: "AIzaSyAyqQDaAtYjI27byygLvNw22mQJBpTIyF0",
  authDomain: "redux-b.firebaseapp.com",
  projectId: "redux-b",
  storageBucket: "redux-b.appspot.com",
  messagingSenderId: "30459355915",
  appId: "1:30459355915:web:2fef5059d5d4b90937780e",
  measurementId: "G-5FBTGCBFT1",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase();

const TomatoTalk = (props) => {
  const formRef = useRef(); //html 노드 접근시 사용함 -
  const msgRef = useRef();
  const userIdRef = useRef();
  // 클라우드 리얼데이터베이스 서버 정보 동기화 처리
  // 메시지 전송시 객체로 넘겼으므로 초기화도 []가 아니라 {}로 해야 함 - 주의
  const [messages, setMessages] = useState({});
  // 사용자가 입력한 메시지 담기
  const [message, setMessage] = useState({
    m_no: 0,
    userId: "",
    msg: "",
    curtime: "",
  });
  const setClock = () => {
    const dateInfo = new Date();
    const hour = modifyNumber(dateInfo.getHours());
    const min = modifyNumber(dateInfo.getMinutes());
    const sec = modifyNumber(dateInfo.getSeconds());
    const curtime = hour + ":" + min + ":" + sec;
    return curtime;
  };
  const modifyNumber = (time) => {
    if (parseInt(time) < 10) return "0" + time;
    else return time;
  };
  useEffect(() => {
    console.log(database);
    setMessage({ ...message, curtime: setClock() });
    const starCountRef = ref(database, "talk");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data);
    });
  }, []);
  const send = (event) => {
    if (event.key === "Enter") {
      //submit속성 사용시 반드시 아래코드 추가할것.- 버블링 방지- 주의할것
      event.preventDefault();
      //사용자가 입력해서 제출하고 나면 폼 리셋되도록해줌
      formRef.current.reset();
      set(ref(database, "talk/" + message.m_no), message);
    }
  };
  const handleSend = (event) => {
    //submit속성 사용시 반드시 아래코드 추가할것.- 버블링 방지- 주의할것
    event.preventDefault();
    //사용자가 입력해서 제출하고 나면 폼 리셋되도록해줌
    formRef.current.reset();
    set(ref(database, "talk/" + message.m_no), message);
  };
  const handleChangeForm = (event) => {
    if (event.currentTarget == null) return;
    console.log("폼 내용 변경 발생 name : " + event.target.name);
    console.log("폼 내용 변경 발생 value : " + event.target.value);

    setMessage({
      ...message,
      userId: "토마토",
      m_no: Date.now(),
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h2>
            TomatoTalk<i className="fa-solid fa-angles-right"></i>
            <small>토마토님 예약상담</small>
          </h2>
          <hr />
        </div>
        <div>
          <ul>
            {messages &&
              Object.keys(messages).map((key) => (
                <MessageLi key={key}>
                  <Button className="btn btn-primary">
                    {messages[key].msg}
                  </Button>
                  &nbsp;({messages[key].curtime})
                </MessageLi>
              ))}
          </ul>
        </div>
        <Form ref={formRef}>
          <InputGroup className="mb-3">
            <input
              type="hidden"
              ref={userIdRef}
              name="userId"
              onChange={handleChangeForm}
            />
            <Form.Control
              ref={msgRef}
              name="msg"
              placeholder="여기에 말씀하세요."
              aria-label="Username"
              aria-describedby="basic-addon1"
              onKeyDown={send}
              onChange={handleChangeForm}
            />
            <Button variant="warning" onClick={handleSend}>
              send
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default TomatoTalk;
