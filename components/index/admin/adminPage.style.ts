import styled from "styled-components";
import Link from "next/link";

export const Text = styled.p`
  color: #fff;
`;

export const AdminContainer = styled.div`
  position: relative;
  width:100%;
  height: 600px;
`

export const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  width: 100%;
  background-color: var(--black);
  border-radius: 25px;
  box-shadow: 3px 3px 20px 0px rgba(255, 255, 255, 0.25),
    8px 8px 15px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 45px 40px;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LinkStyle = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 5px;
  color: var(--mainRed);
  border-radius: 20px;
  background: #fff;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
    background: #999;
    color:var(--black);
  }
`;

export const CommonSelect = styled.li`
  display: flex;
  width: 251px;
  height: 335px;
  padding: 50px 30px;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 170px;
  box-shadow: 10px 10px 44px 0px rgba(255, 255, 255, 0.25) inset;
`;

export const RecipeSelect = styled(CommonSelect)`
  background: var(--subRed, #600001);
`;

export const BoardSelect = styled(CommonSelect)`
  background: var(--black);
`;

export const QuestSelect = styled(CommonSelect)`
  background: var(--subRed);
`;

export const UserSelect = styled(CommonSelect)`
  background: var(--black);
`;