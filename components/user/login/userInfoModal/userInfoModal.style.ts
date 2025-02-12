import Image from 'next/image';
import styled from 'styled-components';


export const ModalContent = styled.div`
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    width: 35rem;
    display: flex;
    z-index: 2;
    max-height: 65vh; 
    overflow-y: auto;
`;

export const UserContainer = styled.div`
    width: 50%;
`

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const UserNickName = styled.h1`
    color: var(--mainRed);
`
export const UserImage = styled(Image)`
    border-radius: 50%;`

export const UserLevelWrapper = styled.div`
    display: flex;
    width: 100%;
`
export const UserLevelImgWarpper = styled.div`
    justify-content: center;
    align-items: center;
    background-color: #CBCBCB;
    margin-right: 0.5rem;
    border-radius: 100%;
    width: 35%;
`
export const UserLevelImage = styled(Image)`
    border-radius: 100%;
`
export const UserLevelInfoWrapper = styled.div`
    width: 65%;
`

export const UserLevelTitle = styled.p`
    color: var(--mainRed);
    font-size: 1rem;
    font-weight: bold;
`
export const UserLevelBackground = styled.div`
    background-color: #060606;
    width: 100%;
    height: 3rem;
    border-radius: 10px;
`
export const UserLevelBadge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const UserCommunityBox = styled.div`
    display: flex;
    justify-content: space-around;
`
export const UserCommunityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--mainRed);
    color: #fff;
    width: 50%;

`
export const UserCommunityTitle = styled.h3``
export const UserCommunityCount = styled.p``

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color:rgb(0, 0, 0);
    width: 50%;
    max-height: 65vh; 
    overflow-y: auto;
    border-radius: 20px 20px 20px 0; 
`
export const BoardHeaderContainer = styled.div`
    display: flex;
    justify-content: space-around; 
    background-color: var(--mainRed);
`

export const BoardHeader = styled.div`
    background-color: var(--mainRed);
    :hover {
        background-color: var(--darkRed);
    }
`

export const BoardTitle = styled.p`
    color: #fff;
    padding: 1rem;
    font-weight: bold;

`

export const BoardList = styled.ul`
  max-height: 65vh; 
  overflow-y: auto;
`
export const BoardItem = styled.li`
    padding: 1rem;
    border-bottom: 1px solid var(--mainRed);
`
export const BoardItemTitle = styled.p`
    color: #fff;
`
export const BoardItemContent = styled.p`
    color: #CBCBCB;
    font-size: 0.8em;
`
export const BoardItemDate = styled.p`
    color: #CBCBCB;
    font-size: 0.7em;
`
export const BoardItemLike = styled.p`
    color: var(--mainRed);
    font-size: 0.7em;
`
export const BoardDateLikeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

