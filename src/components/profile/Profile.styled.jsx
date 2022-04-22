import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 0 auto;
  /* width: fit-content; */
  width: 200px;

  padding: 10px;

  font-size: 12px;
  text-align: center;

  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ProfileDescription = styled.div`
  /* width: 200px; */
`;

export const Avatar = styled.img``;

export const ProfileName = styled.p`
  margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
  margin-bottom: 10px;
`;

export const ProfileLocation = styled.p`
  margin-bottom: 20px;
`;

export const ProfileStatsList = styled.ul`
  display: flex;
  background-color: rgba(177, 177, 177, 0.507);
`;

export const ProfileStatsItem = styled.li`
  min-width: 75px;
`;

export const ProfileStatsLabel = styled.span`
  display: block;
  padding: 5px;
`;

export const ProfileStatsQuantity = styled.span`
  display: block;
  padding: 5px;
`;
