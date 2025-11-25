export interface SlideProps {
  isActive: boolean;
}

export interface NavProps {
  totalSlides: number;
  currentSlide: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  onPrint?: () => void;
  onToggleReport?: () => void;
}