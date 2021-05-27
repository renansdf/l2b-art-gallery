import React from 'react';

import { ArrowNext, ArrowPrevious } from './styles';

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalPages: number;
}

const ImageGalleryPagination: React.FC<IPaginationProps> = ({currentPage, setCurrentPage, totalPages}) => {
  const handleIncrement = () => {
    if (currentPage === totalPages - 1){
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleDecrement = () => {
    if(currentPage === 0){
      setCurrentPage(totalPages - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <ArrowNext onClick={handleIncrement}>&#10095;</ArrowNext>
      <ArrowPrevious onClick={handleDecrement}>&#10094;</ArrowPrevious>
    </>
  );
}

export default ImageGalleryPagination;