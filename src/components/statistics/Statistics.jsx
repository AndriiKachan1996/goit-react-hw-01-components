import PropTypes from 'prop-types';
import { generateRandomColor } from 'utils/randomColor';
import {
  Section,
  Span,
  StatItem,
  StatList,
  StatTitile,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatTitile>{title}</StatTitile>
      <StatList>
        {stats.map(item => (
          <StatItem
            key={item.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <Span>{item.label}</Span>
            <Span>{item.percentage}%</Span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
