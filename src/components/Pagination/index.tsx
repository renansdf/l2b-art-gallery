import React, { useState } from 'react';
import {PaginationContainer, Next, Previous, PageCounter} from './styles';

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalPages: number;
}

const Pagination: React.FC<IPaginationProps> = ({currentPage, setCurrentPage, totalPages}) => {
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true);

  const handleIncrement = () => {
    if (currentPage === totalPages - 2){
      setCurrentPage(currentPage + 1);
      setNextButtonDisabled(true);
      return
    } 
    if(currentPage < totalPages - 2) {
      setCurrentPage(currentPage + 1);
      setPreviousButtonDisabled(false);
    }
  }

  const handleDecrement = () => {
    if(currentPage === 1){
      setCurrentPage(currentPage - 1);
      setPreviousButtonDisabled(true);
      return
    } 
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
      setNextButtonDisabled(false);
    }
  }

  return (
    <PaginationContainer inLastPage={currentPage === totalPages -1}>
      {currentPage < totalPages - 1 && (
        <Next isDisabled={nextButtonDisabled} onClick={handleIncrement}></Next>
      )}
      <PageCounter>{currentPage+1}</PageCounter>
      {currentPage > 0 && (
        <Previous isDisabled={previousButtonDisabled} onClick={handleDecrement}></Previous>
      )}
    </PaginationContainer>
  );
}

export default Pagination;