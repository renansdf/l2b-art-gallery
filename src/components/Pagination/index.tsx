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
  const [scrollContainer] = useState(() => {
    return document.getElementById('sidebar-scroll');
  });

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
    if (scrollContainer)
    scrollContainer.scrollTop = 0;
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
    if (scrollContainer)
    scrollContainer.scrollTop = 0;
  }

  return (
    <PaginationContainer inLastPage={currentPage === totalPages -1}>
      {currentPage > 0 && (
        <Previous isDisabled={previousButtonDisabled} onClick={handleDecrement}></Previous>
      )}
      <PageCounter>{currentPage+1}</PageCounter>
      /
      <PageCounter>{totalPages}</PageCounter>
      {currentPage < totalPages - 1 && (
        <Next isDisabled={nextButtonDisabled} onClick={handleIncrement}></Next>
      )}
    </PaginationContainer>
  );
}

export default Pagination;