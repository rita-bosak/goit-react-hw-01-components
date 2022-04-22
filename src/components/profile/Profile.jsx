import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  Avatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatsList,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileContainer key={tag}>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStatsList>
        <ProfileStatsItem>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
        </ProfileStatsItem>
      </ProfileStatsList>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
