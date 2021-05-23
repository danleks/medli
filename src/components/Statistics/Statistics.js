import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { formatNumber } from '../../utils/formatNumber';
import { StatisticsSectionStyles, StatisticsWrapperStyles, StatisticsItemStyles, StatisticsTitleStyles, StatisticsDescStyles } from './Statistics.styles';

const Statistics = () => {
    const data = useStaticQuery(graphql`
        query StatisticsQuery {
            allDatoCmsStatistic {
                nodes {
                    id
                    number
                    description
                    order
                }
            }
        }
    `);
    const statistics = data.allDatoCmsStatistic.nodes;
    return (
        <StatisticsSectionStyles>
            <StatisticsWrapperStyles>
                {statistics
                    .sort((a,b) => a.order - b.order)
                    .map(({ id, number, description }) => {
                    console.log(description);
                    return (
                        <StatisticsItemStyles key={id}>
                            <StatisticsTitleStyles>{ formatNumber(number) }+</StatisticsTitleStyles>
                            <StatisticsDescStyles>{description}</StatisticsDescStyles>
                        </StatisticsItemStyles>
                    )
                })}
            </StatisticsWrapperStyles>
        </StatisticsSectionStyles>
    )
}

export default Statistics;
