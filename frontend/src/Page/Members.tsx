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

  return (
    <MemberContainer>
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
