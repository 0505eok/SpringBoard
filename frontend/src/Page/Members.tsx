import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Imember {
  id: number;
  name: string;
}

const MemberContainer = styled.div`
  flex: 1;
  padding: 0% 15%;
  overflow-y: scroll;
`;

const Members = () => {
  const [name, setName] = useState("");
  const [memberList, setMemberList] = useState<Imember[]>([]);

  const getMemberList = async () => {
    const res = await fetch("http://13.124.246.173:8080/members");
    const ret = await res.json();
    setMemberList(ret);
  };

  useEffect(() => {
    getMemberList();
  }, []);

  const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const click = async () => {
    // 멤버 등록해서 백엔드로 보내야함
    const res = await fetch("http://13.124.246.173:8080/members", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      setMemberList([...memberList, { id: memberList.length + 1, name: name }]);
      setName("");
    } else {
      alert("이미 있는 이름입니다.");
      setName("");
    }
  };

  return (
    <MemberContainer>
      <AddMember>
        <input type="text" onChange={addName} value={name} />
        <button onClick={click}>등록</button>
      </AddMember>
      <MemberList>
        <ul>
          {memberList.map((member: Imember) => {
            return <li key={member.id}>{member.name}</li>;
          })}
        </ul>
      </MemberList>
    </MemberContainer>
  );
};

export default Members;

const AddMember = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: col;
  background-color: #d1daa5;
  height: 50px;
`;

const MemberList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #d1dddd;
`;
