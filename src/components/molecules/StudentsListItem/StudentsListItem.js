import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Average } from 'components/atoms/Average/Average';
import { StyledInfo, Wrapper } from './StudentsListItem.styles';
import { UserShape } from 'types';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
