import PropTypes from 'prop-types';
import {
  StatisticSection,
  SectionTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticSection>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <StatLabel>{stat.label}</StatLabel>
              <StatPercentage>{stat.percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
