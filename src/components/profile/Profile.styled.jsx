import styled from 'styled-components';

export const Container = styled.div`
  background-color: whitesmoke;
  width: 250px;
  height: auto;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-top: 50px;
`;

export const UserPhoto = styled.img`
  display: flex;
  justify-content: center;
  width: 100px;
  border-radius: 50%;
  background-color: #8c00ff;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 15px;
  position: relative;
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #f0eded;
  }
`;

export const UserName = styled.p`
  color: rgba(17, 19, 33, 1);
  font-size: 25px;
  margin: auto;
  margin-top: 10px;
`;

export const UserTag = styled.p`
  color: rgba(168, 168, 168, 1);
  font-size: 18px;
  margin: auto;
  margin-top: 10px;
`;

export const UserLocation = styled.p`
  color: rgba(168, 168, 168, 1);
  font-size: 18px;
  margin: auto;
  margin-top: 10px;
`;

export const UserInfoBox = styled.ul`
  display: flex;
  background-color: #c2c0c0;
  padding: 0;
  margin: 0;
  height: 60px;
  color: #e3e3e3;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  gap: 4px;

  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  flex-direction: column;
  position: relative;
  :not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    display: block;
    width: 1px;
    height: 100%;
    background-color: #f0eded;
  }
`;

export const Label = styled.span`
  color: grey;
  font-size: 10px;
`;

export const Quantity = styled.span`
  font-size: 12px;
  color: black;
  font-weight: 700;
`;
