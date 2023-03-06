import PropTypes from 'prop-types';
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

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

  return color;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
