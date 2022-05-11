import styled from 'styled-components';

export const FriendListItemStyle = styled.li`
  position: relative;

  padding: 10px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  text-align: center;

  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const FriendItemStatus = styled.span`
  position: absolute;
  top: 1px;
  right: 1px;

  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 1px 2px 3px 0px
    ${props => (props.isOnline ? 'rgb(0, 80, 0)' : 'rgb(109, 2, 2)')};

  background-color: ${props =>
    props.isOnline ? 'rgb(3, 138, 3)' : 'rgb(221, 2, 2)'};
`;

export const Avatar = styled.img`
  padding-bottom: 3px;
  border-bottom: 2px solid #000;
`;

export const FriendName = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;
